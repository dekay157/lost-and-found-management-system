const claimEvidenceModel = require('../models/claimEvidenceModel');

// Get all claim evidence records
const getAllEvidence = (req, res) => {
    claimEvidenceModel.getAllEvidence((err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving claim evidence.',
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

// Add new claim evidence
const addEvidence = (req, res) => {
    const { claim_id, evidence_details } = req.body;

    // Validate required fields
    if (!claim_id || !evidence_details) {
        return res.status(400).json({
            message: 'Claim ID and evidence details are required!'
        });
    }

    claimEvidenceModel.addEvidence(
        claim_id,
        evidence_details,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error submitting claim evidence.',
                    error: err.message
                });
            }

            res.status(201).json({
                message: 'Claim evidence submitted successfully!',
                evidence_id: result.insertId,
                claim_id,
                evidence_details
            });
        }
    );
};

// Export controller functions
module.exports = {
    getAllEvidence,
    addEvidence
};