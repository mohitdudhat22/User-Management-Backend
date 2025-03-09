const { BlacklistedToken } = require("../models");
const { Op } = require("sequelize");

const cleanupBlacklist = async () => {
  try {
    // Remove tokens that have expired
    await BlacklistedToken.destroy({
      where: {
        expiresAt: {
          [Op.lt]: new Date()
        }
      }
    });
    console.log('Cleaned up expired blacklisted tokens');
  } catch (error) {
    console.error('Error cleaning up blacklisted tokens:', error);
  }
};

// Run cleanup every day
setInterval(cleanupBlacklist, 24 * 60 * 60 * 1000);

module.exports = cleanupBlacklist; 