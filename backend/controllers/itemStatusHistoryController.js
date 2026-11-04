const itemStatusHistoryModel = require('../models/itemStatusHistoryModel');

// Get all status history records
const getAllHistory = (req, res) => {
    itemStatusHistoryModel.getAllHistory((err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving status history.',
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

// Get status history by claim ID
const getHistoryByClaimId = (req, res) => {
    const { claim_id } = req.params;

    itemStatusHistoryModel.getHistoryByClaimId(
        claim_id,
        (err, results) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error retrieving claim status history.',
                    error: err.message
                });
            }

            res.status(200).json(results);
        }
    );
};

// Add a new status history record
const addHistory = (req, res) => {
    const { claim_id, previous_status, new_status } = req.body;

    if (!claim_id || !previous_status || !new_status) {
        return res.status(400).json({
            message: 'Claim ID, previous status, and new status are required!'
        });
    }

    if (previous_status === new_status) {
        return res.status(400).json({
            message: 'New status must be different from previous status!'
        });
    }

    itemStatusHistoryModel.addHistory(
        claim_id,
        previous_status,
        new_status,
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error recording status history.',
                    error: err.message
                });
            }

            res.status(201).json({
                message: 'Status history recorded successfully!',
                history_id: result.insertId,
                claim_id,
                previous_status,
                new_status
            });
        }
    );
};

// Export controller functions
module.exports = {
    getAllHistory,
    getHistoryByClaimId,
    addHistory
};