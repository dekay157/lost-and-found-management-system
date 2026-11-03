const express = require('express');
const router = express.Router();

// GET all notifications (temporary test)
router.get('/', (req, res) => {
    res.json({
        message: 'Notification API is working!'
    });
});

// GET notifications by user ID (temporary test)
router.get('/user/:user_id', (req, res) => {
    const { user_id } = req.params;

    res.json({
        message: 'User notifications retrieved successfully!',
        user_id: user_id
    });
});

// PUT mark notification as read (temporary test)
router.put('/:notification_id/read', (req, res) => {
    const { notification_id } = req.params;

    res.json({
        message: 'Notification marked as read successfully!',
        notification_id: notification_id,
        read_status: 1
    });
});

// POST a new notification (temporary test)
router.post('/', (req, res) => {
    const { user_id, message } = req.body;

    // Validate required fields
    if (!user_id || !message) {
        return res.status(400).json({
            message: 'User ID and notification message are required!'
        });
    }

    res.status(201).json({
        message: 'Notification created successfully!',
        notification: {
            user_id,
            message,
            read_status: 0,
            notification_date: new Date()
        }
    });
});

module.exports = router;
