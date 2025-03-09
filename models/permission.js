const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate(models) {
      // No direct associations needed as this is a through table
    }
  }

  Permission.init({
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    },
    can_create: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    can_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    can_update: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    can_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Permission',
    tableName: 'permissions',
    timestamps: false
  });

  return Permission;
};