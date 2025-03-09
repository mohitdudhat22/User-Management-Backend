const { User, Role, LoggedInUser } = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const fs = require('fs').promises;
const path = require('path');

exports.createUser = async (req, res) => {
  try {
    
    const { password, role, ...userData } = req.body;
    const userExists = await User.findOne({ where: { email:userData.email } });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Handle file uploads if present
    let files = [];
    if (req.files && req.files.length > 0) {
      files = req.files.map(file => ({
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype
      }));
    }

    // Create user with files
    const user = await User.create({
      ...userData,
      password: hashedPassword,
      files
    });

    // Return user without password
    const userWithRoles = await User.scope(['withoutPassword']).findByPk(user.id);
    res.status(201).json({
      status: 'success',
      data: userWithRoles
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const { limit, offset, page } = req.pagination;
    const { search, role, sortBy = 'firstname', sortOrder = 'asc' } = req.query;
    
    // Get all active logged-in users
    const activeUsers = await LoggedInUser.findAll({
      where: { isActive: true },
      attributes: ['userId']
    });
    
    const activeUserIds = activeUsers.map(user => user.userId);

    // Build where clause
    let whereClause = {};
    
    // Only exclude active users if there are any
    if (activeUserIds.length > 0) {
      whereClause.id = { [Op.notIn]: activeUserIds };
    }

    // Initialize search conditions array
    let searchConditions = [];

    // Add search functionality
    if (search) {
      searchConditions = [
        { firstname: { [Op.like]: `%${search}%` } },
        { lastname: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } }
      ];
      
      if (User.rawAttributes.role) {
        searchConditions.push({ role: { [Op.like]: `%${search}%` } });
      }
    }

    // Add role filter conditions
    if (role && User.rawAttributes.role) {
      // If role is a direct column, add it to the where clause
      whereClause.role = { [Op.like]: `%${role}%` };
    }

    // Combine search conditions with where clause if they exist
    if (searchConditions.length > 0) {
      whereClause = {
        ...whereClause,
        [Op.and]: [
          whereClause,
          { [Op.or]: searchConditions }
        ]
      };
    }

    const includeOptions = [
      {
        model: Role,
        as: 'roles',
        attributes: ['id', 'name'],
        ...(role && !User.rawAttributes.role ? { where: { name: { [Op.like]: `%${role}%` } } } : {})
      }
    ];

    // Validate sortBy field and handle special case for full name
    let orderCriteria = [];
    if (sortBy === 'name') {
      // Sort by firstname and lastname when 'name' is selected
      orderCriteria = [
        ['firstname', sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC'],
        ['lastname', sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC']
      ];
    } else {
      // Handle other valid sort fields
      const validSortFields = ['firstname', 'lastname', 'email', 'createdAt'];
      if (User.rawAttributes.role) {
        validSortFields.push('role');
      }
      const sortField = validSortFields.includes(sortBy) ? sortBy : 'firstname';
      orderCriteria = [[sortField, sortOrder.toLowerCase() === 'desc' ? 'DESC' : 'ASC']];
    }

    console.log('Search query:', search);
    console.log('Role filter:', role);
    console.log('Where clause:', JSON.stringify(whereClause));
    console.log('Include options:', JSON.stringify(includeOptions));
    console.log('Sort by:', sortBy, sortOrder);

    const { count, rows: users } = await User
      .scope(['withoutPassword'])
      .findAndCountAll({
        where: whereClause,
        limit,
        offset,
        distinct: true,
        attributes: {
          include: [
            ['id', 'userId']
          ]
        },
        include: includeOptions,
        order: orderCriteria
      });

    console.log(`Found ${count} users`);

    res.json({
      users,
      pagination: {
        total: count,
        page,
        totalPages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, roles, email, ...updateData } = req.body;

    // Find user by ID first
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If email is being updated, check if it already exists for another user
    if (email && email !== user.email) {
      const emailExists = await User.findOne({
        where: {
          email,
          id: { [Op.ne]: id } // Exclude current user from check
        }
      });
      if (emailExists) {
        return res.status(400).json({ message: "Email already exists" });
      }
      updateData.email = email;
    }

    // Handle password update
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Handle file uploads if present
    if (req.files && req.files.length > 0) {
      updateData.files = req.files.map(file => ({
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype
      }));  
    }

    await user.update(updateData);

    const updatedUser = await User.scope(['withoutPassword']).findByPk(id);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if user is logged in
    const isUserLoggedIn = await LoggedInUser.findOne({
      where: {
        userId: id,
        isActive: true
      }
    });

    if (isUserLoggedIn) {
      return res.status(403).json({
        status: 'error',
        message: "Cannot delete an active user. User must log out first."
      });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete associated files if they exist
    if (user.files && user.files.length > 0) {
      for (const file of user.files) {
        try {
          await fs.unlink(file.path);
        } catch (error) {
          console.error(`Error deleting file ${file.path}:`, error);
        }
      }
    }

    await user.destroy();
    res.json({
      status: 'success',
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error: error.message
    });
  }
};

exports.uploadFiles =  async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from JWT payload
    const files = req.files; // Get uploaded files
    await User.update(
      { files: files.map(file => file.path) }, 
      { where: { id: userId } }
    );

    res.status(200).json({ message: 'Files uploaded successfully', files });
  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
}

exports.deleteMultipleUsers = async (req, res) => {
  try {
    const { userIds } = req.body;

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({
        status: 'error',
        message: "Please provide an array of user IDs"
      });
    }

    // Check if any of the users are logged in
    const activeUsers = await LoggedInUser.findAll({
      where: {
        userId: { [Op.in]: userIds },
        isActive: true
      }
    });

    if (activeUsers.length > 0) {
      const activeUserIds = activeUsers.map(user => user.userId);
      return res.status(403).json({
        status: 'error',
        message: "Cannot delete active users. Users must log out first.",
        activeUserIds
      });
    }

    // Get all users to delete (for file cleanup)
    const usersToDelete = await User.findAll({
      where: { id: { [Op.in]: userIds } }
    });

    // Delete associated files
    for (const user of usersToDelete) {
      if (user.files && user.files.length > 0) {
        for (const file of user.files) {
          try {
            await fs.unlink(file.path);
          } catch (error) {
            console.error(`Error deleting file ${file.path}:`, error);
          }
        }
      }
    }

    // Delete the users
    const deletedCount = await User.destroy({
      where: { id: { [Op.in]: userIds } }
    });

    res.json({
      status: 'success',
      message: `Successfully deleted ${deletedCount} users`
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error: error.message
    });
  }
};