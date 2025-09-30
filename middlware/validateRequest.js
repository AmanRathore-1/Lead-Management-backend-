const { validationResult } = require("express-validator");


const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return array of validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validateRequest;
