const claimRequestModel = require('../models/claimRequestModel');

// Get all claim requests
const getAllClaims = (req, res) => {
    claimRequestModel.getAllClaims((err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving claim requests.',
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

// Add a new claim request
const addClaim = (req, res) => {
    const { user_id, found_report_id, claim_status } = req.body;

    // Validate required fields
    if (!user_id || !found_report_id || !claim_status) {
        return res.status(400).json({
            message: 'User ID, Found Report ID, and claim status are required!'
        });
    }

    claimRequestModel.addClaim(
        user_id,
        found_report_id,
        claim_status,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error creating claim request.',
                    error: err.message
                });
            }

            res.status(201).json({
                message: 'Claim request created successfully!',
                claim_id: result.insertId,
                user_id,
                found_report_id,
                claim_status
            });
        }
    );
};

// Export controller functions
module.exports = {
    getAllClaims,
    addClaim
};