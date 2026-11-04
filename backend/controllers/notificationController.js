const notificationModel = require('../models/notificationModel');

// Get all notifications
const getAllNotifications = (req, res) => {
    notificationModel.getAllNotifications((err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving notifications.',
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

// Get notifications by user ID
const getNotificationsByUserId = (req, res) => {
    const { user_id } = req.params;

    notificationModel.getNotificationsByUserId(user_id, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error retrieving user notifications.',
                error: err.message
            });
        }

        res.status(200).json(results);
    });
};

// Add a new notification
const addNotification = (req, res) => {
    const { user_id, message } = req.body;

    if (!user_id || !message) {
        return res.status(400).json({
            message: 'User ID and notification message are required!'
        });
    }

    notificationModel.addNotification(user_id, message, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error creating notification.',
                error: err.message
            });
        }

        res.status(201).json({
            message: 'Notification created successfully!',
            notification_id: result.insertId,
            user_id,
            message,
            read_status: 0
        });
    });
};

// Mark notification as read
const markAsRead = (req, res) => {
    const { notification_id } = req.params;

    notificationModel.markAsRead(notification_id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error updating notification.',
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Notification not found!'
            });
        }

        res.status(200).json({
            message: 'Notification marked as read successfully!',
            notification_id,
            read_status: 1
        });
    });
};

// Export controller functions
module.exports = {
    getAllNotifications,
    getNotificationsByUserId,
    addNotification,
    markAsRead
};