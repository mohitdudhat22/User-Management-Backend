'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoggedInUser = sequelize.define('LoggedInUser', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lastActivity: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {});

  LoggedInUser.associate = function(models) {
    LoggedInUser.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return LoggedInUser;
}; 