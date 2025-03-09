const { State, City } = require("../models");

exports.getStates = async (req, res) => {
  try {
    const states = await State.findAll({
      include: [{
        model: City,
        as: 'cities',
        attributes: ['id', 'name']
      }],
      order: [
        ['name', 'ASC'],
        ['cities', 'name', 'ASC']
      ]
    });
    res.json({
      status: 'success',
      data: states
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
};

exports.getCitiesByState = async (req, res) => {
  try {
    const { stateId } = req.params;
    
    const state = await State.findByPk(stateId);
    if (!state) {
      return res.status(404).json({ 
        status: 'error',
        message: "State not found" 
      });
    }

    const cities = await City.findAll({
      where: { stateId },
      order: [['name', 'ASC']],
      attributes: ['id', 'name']
    });
    
    res.json({
      status: 'success',
      data: cities
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error',
      message: error.message 
    });
  }
};

exports.createState = async (req, res) => {
  try {
    const { name } = req.body;
    const state = await State.create({ name });
    res.status(201).json({
      status: 'success',
      data: state
    });
  } catch (error) {
    res.status(400).json({ 
      status: 'error',
      message: error.message 
    });
  }
};

exports.createCity = async (req, res) => {
  try {
    const { name, stateId } = req.body;
    
    const state = await State.findByPk(stateId);
    if (!state) {
      return res.status(404).json({ 
        status: 'error',
        message: "State not found" 
      });
    }

    const city = await City.create({ name, stateId });
    res.status(201).json({
      status: 'success',
      data: city
    });
  } catch (error) {
    res.status(400).json({ 
      status: 'error',
      message: error.message 
    });
  }
};
