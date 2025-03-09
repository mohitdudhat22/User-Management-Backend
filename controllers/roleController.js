const { User, Role } = require("../models");

// Role CRUD operations
exports.createRole = async (req, res) => {
  try {
    const { name, description } = req.body;
    const role = await Role.create({ name, description });
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: [{
        model: User,
        as: 'users',
        attributes: ['id', 'firstname', 'lastname', 'email']
      }]
    });
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const role = await Role.findByPk(roleId, {
      include: [{
        model: User,
        as: 'users',
        attributes: ['id', 'firstname', 'lastname', 'email']
      }]
    });
    
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const { name, description } = req.body;
    
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    
    await role.update({ name, description });
    res.json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const { roleId } = req.params;
    const role = await Role.findByPk(roleId);
    
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    
    await role.destroy();
    res.json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User-Role pivot table operations
exports.attachRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    
    await user.addRole(role);
    res.json({ message: "Role attached successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.detachRole = async (req, res) => {
  try {
    const { userId, roleId } = req.body;
    
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    
    await user.removeRole(role);
    res.json({ message: "Role detached successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getUserRoles = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId, {
      include: [{
        model: Role,
        as: 'roles'
      }]
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json(user.roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 