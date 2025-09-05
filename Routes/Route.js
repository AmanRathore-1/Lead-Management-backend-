const express = require("express");
const router = express.Router();
const LeadController = require("../Controller/LeadManagement");
const {
  createLeadValidation,
  updateLeadValidation,
  idParamValidation,
} = require("../Validators/leadValidation");
const validateRequest = require("../middlware/validateRequest");

const protect = require("../middlware/authMiddleware"); 

// Routes
router.post("/createLead",createLeadValidation, validateRequest, LeadController.createLead);
router.get("/getallLead",protect, LeadController.getAllLeadInfo);
router.get("/getLead/:id",protect, idParamValidation, validateRequest, LeadController.getLeadById);
router.put("/updateLead/:id",protect, updateLeadValidation, validateRequest, LeadController.updateLeadInfo);
router.delete("/deleteLead/:id",protect, idParamValidation, validateRequest, LeadController.deleteLeadInfo);

module.exports = router;
