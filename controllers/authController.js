const { User, BlacklistedToken, LoggedInUser } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../middleware/auth");

exports.register = async (req, res) => {

  const { firstname, lastname, email, contact, postcode, password, hobbies, gender, role } = req.body;

  //check before creating user
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const user = await User.create({ firstname, lastname, email, contact, postcode, password, hobbies, gender, role });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // Check if user exists
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials (Password)" });
    }

    // Generate JWT token
    const token = generateToken(user);
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    
    // Record the login in LoggedInUsers table
    await LoggedInUser.create({
      userId: user.id,
      token,
      lastActivity: new Date()
    });

    // Return the token
    res.json({ token,user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    // Update LoggedInUser record
    await LoggedInUser.update(
      { isActive: false },
      { where: { token } }
    );

    // Add token to blacklist
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await BlacklistedToken.create({
      token,
      expiresAt: new Date(decoded.exp * 1000)
    });

    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
