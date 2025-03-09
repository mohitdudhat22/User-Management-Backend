const db = require('../models');
const Permission = db.Permission;

exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.findAll();
    res.json(permissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePermission = async (req, res) => {
  try {
    const { id } = req.params;
    const { can_create, can_read, can_update, can_delete } = req.body;
    
    const permission = await Permission.findByPk(id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }

    await permission.update({
      can_create,
      can_read,
      can_update,
      can_delete
    });

    res.json(permission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPermission = async (req, res) => {
  try {
    const { role_id, can_create, can_read, can_update, can_delete } = req.body;
    
    const permission = await Permission.create({
      role_id,
      can_create,
      can_read,
      can_update,
      can_delete
    });

    res.status(201).json(permission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePermission = async (req, res) => {
  try {
    const { id } = req.params;
    
    const permission = await Permission.findByPk(id);
    if (!permission) {
      return res.status(404).json({ message: 'Permission not found' });
    }

    await permission.destroy();
    res.json({ message: 'Permission deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 