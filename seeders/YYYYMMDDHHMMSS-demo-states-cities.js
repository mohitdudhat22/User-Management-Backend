'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First, insert states
    await queryInterface.bulkInsert('States', [
      { name: 'California', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Texas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Florida', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Get the inserted states
    const states = await queryInterface.sequelize.query(
      `SELECT id, name FROM States;`
    );

    const stateRows = states[0];

    // Then, insert cities
    const cities = [];
    stateRows.forEach(state => {
      switch(state.name) {
        case 'California':
          cities.push(
            { name: 'Los Angeles', stateId: state.id, createdAt: new Date(), updatedAt: new Date() },
            { name: 'San Francisco', stateId: state.id, createdAt: new Date(), updatedAt: new Date() },
            { name: 'San Diego', stateId: state.id, createdAt: new Date(), updatedAt: new Date() }
          );
          break;
        case 'Texas':
          cities.push(
            { name: 'Houston', stateId: state.id, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Austin', stateId: state.id, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Dallas', stateId: state.id, createdAt: new Date(), updatedAt: new Date() }
          );
          break;
        case 'New York':
          cities.push(
            { name: 'New York City', stateId: state.id, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Buffalo', stateId: state.id, createdAt: new Date(), updatedAt: new Date() }
          );
          break;
        case 'Florida':
          cities.push(
            { name: 'Miami', stateId: state.id, createdAt: new Date(), updatedAt: new Date() },
            { name: 'Orlando', stateId: state.id, createdAt: new Date(), updatedAt: new Date() }
          );
          break;
      }
    });

    return queryInterface.bulkInsert('Cities', cities, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
    await queryInterface.bulkDelete('States', null, {});
  }
}; 