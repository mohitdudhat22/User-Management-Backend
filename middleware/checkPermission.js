const { Permission, Role } = require("../models");

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
      
      const isAdmin = user.role === "admin";
      if (isAdmin) {
        console.log("------------")
        return next(); // Admin has all permissions
      }
      const role = await Role.findOne({
        where: { id: userRoles.role }
      });
      console.log(role.id,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
      // For non-admin users, check specific permissions
        const permission = await Permission.findOne({
          where: { role_id: role.id }
        });
        console.log(permission,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        if (permission && permission[action]) {
          return next();
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