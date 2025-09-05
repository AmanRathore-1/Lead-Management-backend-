const { body, param } = require("express-validator");

// Validation rules for creating a lead
const createLeadValidation = [
  body("Name").notEmpty().withMessage("Name is required"),
  body("Email").isEmail().withMessage("Valid email is required"),
  body("PhoneNO")
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be 10 digits"),
  body("Message").notEmpty().withMessage("Message is required"),
  body("Interest").notEmpty().withMessage("Interest is required"),
  body("Source").notEmpty().withMessage("Source is required"),
  body("Status")
    .isIn(["new", "lost", "converted", "contacted"])
    .withMessage("Status must be new, lost, converted, or contacted"),
];

// Validation rules for updating a lead
const updateLeadValidation = [
  param("id").isMongoId().withMessage("Invalid lead ID"),
  body("Email").optional().isEmail().withMessage("Valid email is required"),
  body("PhoneNO")
    .optional()
    .matches(/^\d{10}$/)
    .withMessage("Phone number must be 10 digits"),
  body("Status")
    .optional()
    .isIn(["new", "lost", "converted", "contacted"])
    .withMessage("Status must be new, lost, converted, or contacted"),
];

// Validation for lead ID (used in get/delete)
const idParamValidation = [
  param("id").isMongoId().withMessage("Invalid lead ID"),
];

module.exports = {
  createLeadValidation,
  updateLeadValidation,
  idParamValidation,
};
