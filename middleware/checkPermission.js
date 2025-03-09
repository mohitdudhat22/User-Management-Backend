const { Permission } = require("../models");

/**
 * Middleware to check if user has the required permission
 * @param {string} action - Permission action (e.g., 'can_create')
 * @returns {Function} Express middleware function
 */
const checkPermission = (action) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      
      // Get user roles
      const userRoles = await user.getRoles();
      console.log(userRoles,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
      
      // Check if user has admin role (ID: 2)
      const isAdmin = userRoles.some(role => role.id === 2);
      if (isAdmin) {
        return next(); // Admin has all permissions
      }

      // For non-admin users, check specific permissions
      for (const role of userRoles) {
        const permission = await Permission.findOne({
          where: { role_id: role.id }
        });
        
        if (permission && permission[action]) {
          return next();
        }
      }

      res.status(403).json({ 
        message: 'Permission denied',
        required: action
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = checkPermission;