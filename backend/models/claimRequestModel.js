const db = require('../config/db');

// Get all claim requests
const getAllClaims = (callback) => {
    const sql = `
        SELECT claim_id, user_id, found_report_id, claim_status
        FROM claim_request
    `;

    db.query(sql, callback);
};

// Add a new claim request
const addClaim = (user_id, found_report_id, claim_status, callback) => {
    const sql = `
        INSERT INTO claim_request (user_id, found_report_id, claim_status)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [user_id, found_report_id, claim_status], callback);
};

// Export model functions
module.exports = {
    getAllClaims,
    addClaim
};