const isAdmin = async (req, res, next) => {
  try {
    // Assuming the user's role is stored in req.user after authentication
    if (req.user.role !== 'admin') {
      return res.status(403).json({ 
        message: 'Access denied. Only administrators can manage permissions.' 
      });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = isAdmin; 