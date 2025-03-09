'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'States',
        key: 'id'
      }
    }
  });

  City.associate = (models) => {
    City.belongsTo(models.State, { foreignKey: "stateId", as: "state" });
  };

  return City;
};

