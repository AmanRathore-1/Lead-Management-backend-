const LeadModel = require("../Model/LeadSchema.js");
const { generateToken } = require("./authController");
// Helper to format lead object
const formatLead = (lead) => {
  const { _id, __v, ...rest } = lead.toObject();
  return { id: _id, ...rest };
};

// Create Lead
exports.createLead = async (req, res) => {
  try {
    const leadInfo = req.body;
    const newLead = new LeadModel(leadInfo);
    const saveLeadInfo = await newLead.save();
    const payload = { name: saveLeadInfo.name, email: saveLeadInfo.email };
    const token = generateToken(payload);

      res.status(201).json({
      lead: formatLead(saveLeadInfo),
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Leads
exports.getAllLeadInfo = async (req, res) => {
  try {
    const leads = await LeadModel.find().sort({ createdAt: -1 });
    res.status(200).json(leads.map(formatLead));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Lead by ID
exports.getLeadById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Lead id is required" });

    const lead = await LeadModel.findById(id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });

    if (
      lead.email !== req.user.email
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this lead" });
    }

    res.status(200).json(formatLead(lead));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Lead
exports.deleteLeadInfo = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Lead id is required" });

    const deletedLead = await LeadModel.findByIdAndDelete(id);
    if (!deletedLead) return res.status(404).json({ message: "Lead not found" });

    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Lead
exports.updateLeadInfo = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Lead id is required" });

    const leadInfo = req.body;
    const updatedLead = await LeadModel.findByIdAndUpdate(id, leadInfo, { new: true });
    if (!updatedLead) return res.status(404).json({ message: "Lead not found" });

    res.status(200).json(formatLead(updatedLead));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
