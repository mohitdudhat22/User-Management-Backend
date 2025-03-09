module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert("Cities", [
        { name: "Los Angeles", stateId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "San Francisco", stateId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: "Houston", stateId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: "Dallas", stateId: 2, createdAt: new Date(), updatedAt: new Date() },
      ]);
    },
    down: async (queryInterface) => {
      await queryInterface.bulkDelete("Cities", null, {});
    }
  };
  