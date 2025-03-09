const { Customer } = require("../models");
const { Op } = require('sequelize');

exports.createCustomer = async (req, res) => {
  try {
    const { name, email, contact, address, status, customerType, notes } = req.body;
    
    // Check if customer with email already exists
    const existingCustomer = await Customer.findOne({ where: { email } });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Customer with this email already exists' });
    }
    
    const customer = await Customer.create({
      name,
      email,
      contact,
      address,
      status,
      customerType,
      notes
    });
    
    res.status(201).json({
      status: 'success',
      data: customer
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const { limit, offset } = req.pagination || { limit: 10, offset: 0 };
    const { search, status, type, sortBy = 'name', sortOrder = 'asc' } = req.query;
    
    // Build where clause
    let whereClause = {};
    
    // Add search functionality
    if (search) {
      whereClause = {
        ...whereClause,
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } },
          { contact: { [Op.like]: `%${search}%` } },
          { address: { [Op.like]: `%${search}%` } }
        ]
      };
    }
    
    // Add status filter
    if (status) {
      whereClause.status = status;
    }
    
    // Add type filter
    if (type) {
      whereClause.customerType = type;
    }
    
    // Validate sortBy field
    const validSortFields = ['name', 'email', 'status', 'createdAt', 'customerType'];
    const actualSortBy = validSortFields.includes(sortBy) ? sortBy : 'name';
    
    // Create order array for sorting
    const order = [[actualSortBy, sortOrder.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']];
    
    const { count, rows: customers } = await Customer.findAndCountAll({
      where: whereClause,
      limit,
      offset,
      order
    });
    
    res.json({
      status: 'success',
      count,
      data: customers,
      totalPages: Math.ceil(count / limit),
      currentPage: Math.floor(offset / limit) + 1
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    
    res.json({
      status: 'success',
      data: customer
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, address, status, customerType, notes } = req.body;
    
    const customer = await Customer.findByPk(id);
    
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    
    // If email is being changed, check if it's already in use
    if (email && email !== customer.email) {
      const existingCustomer = await Customer.findOne({ where: { email } });
      if (existingCustomer) {
        return res.status(400).json({ message: 'Email already in use by another customer' });
      }
    }
    
    // Update customer
    await customer.update({
      name: name || customer.name,
      email: email || customer.email,
      contact: contact !== undefined ? contact : customer.contact,
      address: address !== undefined ? address : customer.address,
      status: status || customer.status,
      customerType: customerType || customer.customerType,
      notes: notes !== undefined ? notes : customer.notes
    });
    
    res.json({
      status: 'success',
      data: customer
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    
    await customer.destroy();
    
    res.json({
      status: 'success',
      message: 'Customer deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.deleteMultipleCustomers = async (req, res) => {
  try {
    const { ids } = req.body;
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'Please provide an array of customer IDs' });
    }
    
    const result = await Customer.destroy({
      where: {
        id: {
          [Op.in]: ids
        }
      }
    });
    
    res.json({
      status: 'success',
      message: `${result} customers deleted successfully`
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
}; 