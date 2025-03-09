const { LoggedInUser } = require('../models');
const { Op } = require('sequelize');

const cleanupSessions = async () => {
  try {
    // Clean up sessions older than 7 days
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);

    await LoggedInUser.destroy({
      where: {
        [Op.or]: [
          { lastActivity: { [Op.lt]: cutoff } },
          { isActive: false }
        ]
      }
    });
  } catch (error) {
    console.error('Error cleaning up sessions:', error);
  }
};

module.exports = cleanupSessions; 