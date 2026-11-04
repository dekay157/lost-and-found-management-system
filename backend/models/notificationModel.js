const db = require('../config/db');

// Get all notifications
const getAllNotifications = (callback) => {
    const sql = `
        SELECT notification_id, user_id, message, notification_date, read_status
        FROM notification
    `;

    db.query(sql, callback);
};

// Get notifications by user ID
const getNotificationsByUserId = (user_id, callback) => {
    const sql = `
        SELECT notification_id, user_id, message, notification_date, read_status
        FROM notification
        WHERE user_id = ?
    `;

    db.query(sql, [user_id], callback);
};

// Add a new notification
const addNotification = (user_id, message, callback) => {
    const sql = `
        INSERT INTO notification (user_id, message, notification_date, read_status)
        VALUES (?, ?, NOW(), 0)
    `;

    db.query(sql, [user_id, message], callback);
};

// Mark notification as read
const markAsRead = (notification_id, callback) => {
    const sql = `
        UPDATE notification
        SET read_status = 1
        WHERE notification_id = ?
    `;

    db.query(sql, [notification_id], callback);
};

// Export model functions
module.exports = {
    getAllNotifications,
    getNotificationsByUserId,
    addNotification,
    markAsRead
};