require("dotenv").config();
const jwt = require("jsonwebtoken");


// Utility function to generate token
exports.generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};
