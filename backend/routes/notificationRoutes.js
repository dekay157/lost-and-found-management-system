const express = require('express');
const router = express.Router();

const notificationController = require('../controllers/notificationController');

// GET all notifications
router.get('/', notificationController.getAllNotifications);

// GET notifications by user ID
router.get('/user/:user_id', notificationController.getNotificationsByUserId);

// POST a new notification
router.post('/', notificationController.addNotification);

// PUT mark notification as read
router.put('/:notification_id/read', notificationController.markAsRead);

module.exports = router;