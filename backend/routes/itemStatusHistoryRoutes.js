const express = require('express');
const router = express.Router();

const itemStatusHistoryController = require('../controllers/itemStatusHistoryController');

// GET all status history records
router.get('/', itemStatusHistoryController.getAllHistory);

// GET status history by claim ID
router.get('/claim/:claim_id', itemStatusHistoryController.getHistoryByClaimId);

// POST a new status history record
router.post('/', itemStatusHistoryController.addHistory);

module.exports = router;