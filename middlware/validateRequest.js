const { validationResult } = require("express-validator");

/**
 * Middleware to check validation results from express-validator
 * Returns 400 with errors if validation fails
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return array of validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validateRequest;
