'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true }
    },
    contact: DataTypes.STRING,
    address: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
    customerType: {
      type: DataTypes.ENUM('individual', 'business'),
      defaultValue: 'individual'
    },
    notes: DataTypes.TEXT
  }, {});
  
  Customer.associate = function(models) {
    // Define associations here if needed
    // For example, Customer could belong to a User
    // Customer.belongsTo(models.User);
  };
  
  return Customer;
}; 