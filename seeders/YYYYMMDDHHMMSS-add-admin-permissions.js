'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const adminRoleId = 1; // Replace with the actual Admin role ID
    const permissions = await queryInterface.sequelize.query(
      `SELECT id FROM Permissions;`
    );

    const rolePermissions = permissions[0].map(permission => ({
      roleId: adminRoleId,
      permissionId: permission.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert('RolePermissions', rolePermissions);
  },

  down: async (queryInterface, Sequelize) => {
    const adminRoleId = 1; // Replace with the actual Admin role ID
    const permissions = await queryInterface.sequelize.query(
      `SELECT id FROM Permissions;`
    );

    const permissionIds = permissions[0].map(permission => permission.id);

    return queryInterface.bulkDelete('RolePermissions', {
      roleId: adminRoleId,
      permissionId: permissionIds
    });
  }
}; 