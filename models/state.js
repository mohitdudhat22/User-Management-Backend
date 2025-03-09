'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("State", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
  });

  State.associate = (models) => {
    State.hasMany(models.City, {
      foreignKey: 'stateId',
      as: 'cities',
      onDelete: 'CASCADE'
    });
  };

  return State;
};

