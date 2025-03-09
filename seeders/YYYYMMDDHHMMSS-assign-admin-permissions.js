'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First, ensure we have the basic permissions in place
    const basicPermissions = [
      // Customer permissions
      {
        name: 'customer.create',
        description: 'Create new customers',
        module: 'customer',
        action: 'create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'customer.read',
        description: 'View customers',
        module: 'customer',
        action: 'read',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'customer.update',
        description: 'Edit customers',
        module: 'customer',
        action: 'update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'customer.delete',
        description: 'Delete customers',
        module: 'customer',
        action: 'delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Supplier permissions
      {
        name: 'supplier.create',
        description: 'Create new suppliers',
        module: 'supplier',
        action: 'create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'supplier.read',
        description: 'View suppliers',
        module: 'supplier',
        action: 'read',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'supplier.update',
        description: 'Edit suppliers',
        module: 'supplier',
        action: 'update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'supplier.delete',
        description: 'Delete suppliers',
        module: 'supplier',
        action: 'delete',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Insert permissions if they don't exist
    await queryInterface.bulkInsert('Permissions', basicPermissions, {
      ignoreDuplicates: true
    });

    // Get all permissions
    const [permissions] = await queryInterface.sequelize.query(
      `SELECT id FROM Permissions;`
    );

    // Create role-permission entries for admin role (ID: 2)
    const rolePermissions = permissions.map(permission => ({
      roleId: 2,  // Admin role ID
      permissionId: permission.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    // Insert role permissions
    await queryInterface.bulkInsert('RolePermissions', rolePermissions, {
      ignoreDuplicates: true
    });

    // Log success message
    console.log(`Successfully assigned ${rolePermissions.length} permissions to admin role`);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all role permissions for admin role
    await queryInterface.bulkDelete('RolePermissions', {
      roleId: 2
    });

    // Remove all permissions
    await queryInterface.bulkDelete('Permissions', null, {});
  }
}; 