const express = require('express');
const router = express.Router();

const claimRequestController = require('../controllers/claimRequestController');

// GET all claim requests
router.get('/', claimRequestController.getAllClaims);

// POST a new claim request
router.post('/', claimRequestController.addClaim);

module.exports = router;