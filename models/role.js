'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: 'UserRoles',
        foreignKey: 'roleId',
        as: 'users'
      });
      
      Role.belongsToMany(models.Permission, {
        through: 'RolePermissions',
        foreignKey: 'roleId',
        as: 'permissions'
      });
    }
  }
  Role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Role',
    timestamps: true
  });

  // Add method to check if role has specific permission
  Role.prototype.hasPermission = async function(action) {
    const permission = await this.getRolePermission();
    switch(action) {
      case 'create':
        return permission.can_create;
      case 'read':
        return permission.can_read;
      case 'update':
        return permission.can_update;
      case 'delete':
        return permission.can_delete;
      default:
        return false;
    }
  };

  return Role;
};