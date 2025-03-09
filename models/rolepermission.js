'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RolePermission extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }
  
  RolePermission.init({
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Permissions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'RolePermission',
    tableName: 'roles',
    indexes: [
      {
        unique: true,
        fields: ['roleId', 'permissionId']
      }
    ]
  });
  
  return RolePermission;
}; 