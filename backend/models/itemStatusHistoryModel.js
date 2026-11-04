const db = require('../config/db');

// Get all status history records
const getAllHistory = (callback) => {
    const sql = `
        SELECT history_id, claim_id, previous_status, new_status, changed_at
        FROM item_status_history
    `;

    db.query(sql, callback);
};

// Get status history by claim ID
const getHistoryByClaimId = (claim_id, callback) => {
    const sql = `
        SELECT history_id, claim_id, previous_status, new_status, changed_at
        FROM item_status_history
        WHERE claim_id = ?
    `;

    db.query(sql, [claim_id], callback);
};

// Add a new status history record
const addHistory = (claim_id, previous_status, new_status, callback) => {
    const sql = `
        INSERT INTO item_status_history
        (claim_id, previous_status, new_status, changed_at)
        VALUES (?, ?, ?, NOW())
    `;

    db.query(sql, [claim_id, previous_status, new_status], callback);
};

// Export model functions
module.exports = {
    getAllHistory,
    getHistoryByClaimId,
    addHistory
};