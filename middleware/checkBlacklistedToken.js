const { BlacklistedToken } = require("../models");

const checkBlacklistedToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Token:========================', token);
    if (token) {
      const blacklistedToken = await BlacklistedToken.findOne({ 
        where: { token } 
      });
      
      if (blacklistedToken) {
        return res.status(401).json({ message: "Token has been invalidated" });
      }
    }
    
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = checkBlacklistedToken; 