const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      const userRoles = await user.getRoles({
        include: [{
          model: Permission,
          as: 'permissions',
          where: { name: requiredPermission },
          through: { attributes: [] }
        }]
      });

      if (userRoles.some(role => role.permissions.length > 0)) {
        return next();
      }

      res.status(403).json({ message: 'Permission denied' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = checkPermission; 