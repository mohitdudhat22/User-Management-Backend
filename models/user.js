'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
const eventEmitter = require('../services/eventEmitter');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hobbies: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false
    },
    files: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
      validate: {
        isIn: [['admin', 'user', 'moderator']]
      },
      set(value) {
        this.setDataValue('role', value.toLowerCase());
      }
    },
  }, {
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] }
      },
      active: {
        where: { status: 'active' }
      },
      exceptUser(userId) {
        return {
          where: {
            id: { [sequelize.Sequelize.Op.ne]: userId }
          }
        }
      }
    },
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      afterCreate: async (user) => {
        eventEmitter.emit('userCreated', user);
      }
    }
  });

  User.associate = function(models) {
    User.belongsToMany(models.Role, {
      through: 'UserRoles',
      foreignKey: 'userId',
      as: 'roles'
    });
  };

  User.prototype.isAdmin = async function() {
    const roles = await this.getRoles();
    return roles.some(role => role.name === 'admin');
  };

  return User;
};