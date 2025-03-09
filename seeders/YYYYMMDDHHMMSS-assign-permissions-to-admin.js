'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Get the admin role
    const [adminRole] = await queryInterface.sequelize.query(
      `SELECT id FROM Roles WHERE name = 'Admin' LIMIT 1;`
    );
    
    if (!adminRole || adminRole.length === 0) {
      console.log('Admin role not found');
      return;
    }
    
    const adminRoleId = adminRole[0].id;
    
    // Get the customer and supplier permissions
    const [permissions] = await queryInterface.sequelize.query(
      `SELECT id FROM Permissions 
       WHERE name IN (
        'customer.create', 'customer.read', 'customer.update', 'customer.delete',
        'supplier.create', 'supplier.read', 'supplier.update', 'supplier.delete'
       );`
    );
    
    if (!permissions || permissions.length === 0) {
      console.log('No permissions found');
      return;
    }
    
    // Create RolePermissions entries
    const rolePermissions = permissions.map(permission => ({
      roleId: adminRoleId,
      permissionId: permission.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
    
    return queryInterface.bulkInsert('RolePermissions', rolePermissions);
  },

  down: async (queryInterface, Sequelize) => {
    // Get the admin role
    const [adminRole] = await queryInterface.sequelize.query(
      `SELECT id FROM Roles WHERE name = 'Admin' LIMIT 1;`
    );
    
    if (!adminRole || adminRole.length === 0) {
      return;
    }
    
    const adminRoleId = adminRole[0].id;
    
    // Get the customer and supplier permissions
    const [permissions] = await queryInterface.sequelize.query(
      `SELECT id FROM Permissions 
       WHERE name IN (
        'customer.create', 'customer.read', 'customer.update', 'customer.delete',
        'supplier.create', 'supplier.read', 'supplier.update', 'supplier.delete'
       );`
    );
    
    if (!permissions || permissions.length === 0) {
      return;
    }
    
    const permissionIds = permissions.map(p => p.id);
    
    return queryInterface.bulkDelete('RolePermissions', {
      roleId: adminRoleId,
      permissionId: {
        [Sequelize.Op.in]: permissionIds
      }
    });
  }
}; 