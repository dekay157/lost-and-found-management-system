const db = require('../config/db');

// Get all claim evidence records
const getAllEvidence = (callback) => {
    const sql = `
        SELECT evidence_id, claim_id, evidence_details
        FROM claim_evidence
    `;

    db.query(sql, callback);
};

// Add new claim evidence
const addEvidence = (claim_id, evidence_details, callback) => {
    const sql = `
        INSERT INTO claim_evidence (claim_id, evidence_details)
        VALUES (?, ?)
    `;

    db.query(sql, [claim_id, evidence_details], callback);
};

// Export model functions
module.exports = {
    getAllEvidence,
    addEvidence
};