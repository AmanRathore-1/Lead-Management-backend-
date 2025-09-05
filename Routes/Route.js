const express = require("express");
const router = express.Router();
const LeadController = require("../Controller/LeadManagement");
const {
  createLeadValidation,
  updateLeadValidation,
  idParamValidation,
} = require("../Validators/leadValidation");
const validateRequest = require("../middlware/validateRequest");

// Routes
router.post("/createLead", createLeadValidation, validateRequest, LeadController.createLead);
router.get("/getallLead", LeadController.getAllLeadInfo);
router.get("/getLead/:id", idParamValidation, validateRequest, LeadController.getLeadById);
router.put("/updateLead/:id", updateLeadValidation, validateRequest, LeadController.updateLeadInfo);
router.delete("/deleteLead/:id", idParamValidation, validateRequest, LeadController.deleteLeadInfo);

module.exports = router;
