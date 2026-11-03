const express = require('express');
const router = express.Router();

// GET all item status history records (temporary test)
router.get('/', (req, res) => {
    res.json({
        message: 'Item Status History API is working!'
    });
});

// GET status history by claim ID (temporary test)
router.get('/claim/:claim_id', (req, res) => {
    const { claim_id } = req.params;

    res.json({
        message: 'Claim status history retrieved successfully!',
        claim_id: claim_id
    });
});

// POST a new status history record (temporary test)
router.post('/', (req, res) => {
    const { claim_id, previous_status, new_status } = req.body;

    // Validate required fields
    if (!claim_id || !previous_status || !new_status) {
        return res.status(400).json({
            message: 'Claim ID, previous status, and new status are required!'
        });
    }

    // Prevent identical status changes
    if (previous_status === new_status) {
        return res.status(400).json({
            message: 'New status must be different from previous status!'
        });
    }

    res.status(201).json({
        message: 'Status history recorded successfully!',
        history: {
            claim_id,
            previous_status,
            new_status,
            changed_at: new Date()
        }
    });
});
module.exports = router;
