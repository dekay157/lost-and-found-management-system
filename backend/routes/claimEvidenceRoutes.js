const express = require('express');
const router = express.Router();

// GET all claim evidence records (temporary test)
router.get('/', (req, res) => {
    res.json({
        message: 'Claim Evidence API is working!'
    });
});

// POST claim evidence (temporary test)
router.post('/', (req, res) => {
    const { claim_id, evidence_details } = req.body;

    // Validate required fields
    if (!claim_id || !evidence_details) {
        return res.status(400).json({
            message: 'Claim ID and evidence details are required!'
        });
    }

    res.status(201).json({
        message: 'Claim evidence submitted successfully!',
        evidence: {
            claim_id,
            evidence_details
        }
    });
});

module.exports = router;