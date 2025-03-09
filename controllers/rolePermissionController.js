const { Role, Permission } = require('../models');

exports.assignPermissionToRole = async (req, res) => {
  try {
    const { roleId, permissionId } = req.body;
    
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    const permission = await Permission.findByPk(permissionId);
    if (!permission) {
      return res.status(404).json({ message: "Permission not found" });
    }

    await role.addPermission(permission);
    
    res.json({
      status: 'success',
      message: 'Permission assigned successfully'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removePermissionFromRole = async (req, res) => {
  try {
    const { roleId, permissionId } = req.body;
    
    const role = await Role.findByPk(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    const permission = await Permission.findByPk(permissionId);
    if (!permission) {
      return res.status(404).json({ message: "Permission not found" });
    }

    await role.removePermission(permission);
    
    res.json({
      status: 'success',
      message: 'Permission removed successfully'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRolePermissions = async (req, res) => {
  try {
    const { roleId } = req.params;
    
    const role = await Role.findByPk(roleId, {
      include: [{
        model: Permission,
        as: 'permissions',
        through: { attributes: [] }
      }]
    });

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.json({
      status: 'success',
      data: role.permissions
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 