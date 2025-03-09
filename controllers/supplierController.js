const { Supplier } = require("../models");
const { Op } = require('sequelize');

// Create a new supplier
exports.createSupplier = async (req, res) => {
  try {
    const { name, email, contact, address, status } = req.body;
    
    // Check if supplier with email already exists
    const existingSupplier = await Supplier.findOne({ where: { email } });
    if (existingSupplier) {
      return res.status(400).json({ message: 'Supplier with this email already exists' });
    }
    
    const supplier = await Supplier.create({
      name,
      email,
      contact,
      address,
      status
    });
    
    res.status(201).json({
      status: 'success',
      data: supplier
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get all suppliers with filters and pagination
exports.getAllSuppliers = async (req, res) => {
  try {
    const { limit, offset } = req.pagination || { limit: 10, offset: 0 };
    const { search, status, sortBy = 'name', sortOrder = 'asc' } = req.query;
    
    // Build where clause
    let whereClause = {};
    
    // Add search functionality
    if (search) {
      whereClause = {
        ...whereClause,
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } },
          { contact: { [Op.like]: `%${search}%` } },
          { address: { [Op.like]: `%${search}%` } }
        ]
      };
    }
    
    // Add status filter
    if (status) {
      whereClause.status = status;
    }
    
    // Validate sortBy field
    const validSortFields = ['name', 'email', 'status', 'createdAt'];
    const actualSortBy = validSortFields.includes(sortBy) ? sortBy : 'name';
    
    // Create order array for sorting
    const order = [[actualSortBy, sortOrder.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']];
    
    const { count, rows: suppliers } = await Supplier.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      order
    });
    
    res.json({
      status: 'success',
      count,
      data: suppliers,
      totalPages: Math.ceil(count / limit),
      currentPage: Math.floor(offset / limit) + 1
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get supplier by ID
exports.getSupplierById = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByPk(id);
    
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    
    res.json({
      status: 'success',
      data: supplier
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Update supplier
exports.updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, address, status } = req.body;
    
    const supplier = await Supplier.findByPk(id);
    
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    
    // If email is being changed, check if it's already in use
    if (email && email !== supplier.email) {
      const existingSupplier = await Supplier.findOne({ where: { email } });
      if (existingSupplier) {
        return res.status(400).json({ message: 'Email already in use by another supplier' });
      }
    }
    
    // Update supplier
    await supplier.update({
      name: name || supplier.name,
      email: email || supplier.email,
      contact: contact !== undefined ? contact : supplier.contact,
      address: address !== undefined ? address : supplier.address,
      status: status || supplier.status
    });
    
    res.json({
      status: 'success',
      data: supplier
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Delete supplier
exports.deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByPk(id);
    
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }
    
    await supplier.destroy();
    
    res.json({
      status: 'success',
      message: 'Supplier deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Bulk delete suppliers
exports.deleteMultipleSuppliers = async (req, res) => {
  try {
    const { ids } = req.body;
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'Please provide an array of supplier IDs' });
    }
    
    const result = await Supplier.destroy({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });
    
    res.json({
      status: 'success',
      message: `${result} suppliers deleted successfully`
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
}; 