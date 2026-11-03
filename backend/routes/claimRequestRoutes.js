const express = require('express');
const router = express.Router();

// GET all claim requests (temporary test)
router.get('/', (req, res) => {
    res.json({
        message: 'Claim Request API is working!'
    });
});


// GET a specific claim request by ID (temporary test)
router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        message: 'Claim request retrieved successfully!',
        claim_id: id
    });
});


// DELETE a claim request (temporary test)
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    res.json({
        message: 'Claim request deleted successfully!',
        claim_id: id
    });
});


// PUT update a claim request (temporary test)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { claim_status } = req.body;

    if (!claim_status) {
        return res.status(400).json({
            message: 'Claim status is required!'
        });
    }

    res.json({
        message: 'Claim request updated successfully!',
        claim_id: id,
        claim_status
    });
});


// POST a claim request (temporary test)
router.post('/', (req, res) => {
    const { user_id, found_report_id } = req.body;

    // Check required fields
    if (!user_id || !found_report_id) {
        return res.status(400).json({
            message: 'User ID and Found Report ID are required!'
        });
    }

    res.status(201).json({
        message: 'Claim request received successfully!',
        claim: {
            user_id,
            found_report_id
        }
    });
});

module.exports = router;