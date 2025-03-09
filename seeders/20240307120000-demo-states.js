module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert("States", [
        { name: "California", createdAt: new Date(), updatedAt: new Date() },
        { name: "Texas", createdAt: new Date(), updatedAt: new Date() },
      ]);
    },
    down: async (queryInterface) => {
      await queryInterface.bulkDelete("States", null, {});
    }
  };
  