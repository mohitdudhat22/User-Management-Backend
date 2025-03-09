const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../models");
const checkBlacklistedToken = require("./checkBlacklistedToken");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
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
  console.log('User  for Token Generation:', user);
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};