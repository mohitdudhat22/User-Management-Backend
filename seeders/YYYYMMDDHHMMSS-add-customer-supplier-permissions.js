'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
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
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', {
      name: {
        [Sequelize.Op.in]: [
          'customer.create', 'customer.read', 'customer.update', 'customer.delete',
          'supplier.create', 'supplier.read', 'supplier.update', 'supplier.delete'
        ]
      }
    }, {});
  }
}; 