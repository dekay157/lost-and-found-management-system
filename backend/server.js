const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Main route
app.get('/', (req, res) => {
    res.send('Lost and Found Management System API is running!');
});

// Import routes
const claimRequestRoutes = require('./routes/claimRequestRoutes');

// Use routes
app.use('/api/claims', claimRequestRoutes);

// Import Status History routes
const itemStatusHistoryRoutes = require('./routes/itemStatusHistoryRoutes');

// Use Status History routes
app.use('/api/status-history', itemStatusHistoryRoutes);

// Import Notification routes
const notificationRoutes = require('./routes/notificationRoutes');

// Use Notification routes
app.use('/api/notifications', notificationRoutes);

// Import Claim Evidence routes
const claimEvidenceRoutes = require('./routes/claimEvidenceRoutes');

// Use Claim Evidence routes
app.use('/api/claim-evidence', claimEvidenceRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});