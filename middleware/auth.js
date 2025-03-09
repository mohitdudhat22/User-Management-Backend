const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");
const checkBlacklistedToken = require("./checkBlacklistedToken");

// Custom JWT extractor that checks both cookies and Authorization header
const customJwtExtractor = (req) => {
  // First check if token exists in cookies
  let token = null;
  if (req && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  
  // If not in cookies, check Authorization header
  if (!token && req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }
  }
  
  return token;
};

const opts = {
  jwtFromRequest: customJwtExtractor,
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(opts, async (jwt_payload, done) => {
    try {
      if (!jwt_payload || !jwt_payload.id) {
        console.error("JWT payload is missing or invalid:", jwt_payload);
        return done(null, false);
      }
      
      const user = await User.findByPk(jwt_payload.id);
      
      if (user) return done(null, user);
      return done(null, false);
    } catch (error) {
      console.error("Error in JWT Strategy:", error);
      return done(error, false);
    }
  })
);


// Combine passport authentication with blacklist check
exports.protect = [
  checkBlacklistedToken,
  passport.authenticate('jwt', { session: false })
];

exports.generateToken = (user) => {
  console.log('User for Token Generation:', user);
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};