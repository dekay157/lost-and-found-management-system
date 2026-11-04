const express = require('express');
const router = express.Router();

const claimEvidenceController = require('../controllers/claimEvidenceController');

// GET all claim evidence records
router.get('/', claimEvidenceController.getAllEvidence);

// POST new claim evidence
router.post('/', claimEvidenceController.addEvidence);

module.exports = router;