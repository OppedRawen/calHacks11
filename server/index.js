const express = require('express');
const app = express();
const dataRoutes = require('./routes/dataRoutes');
const connectDB = require('./config/db');
const profileRoutes = require('./routes/profileRoutes');
// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the data routes for API requests
app.use('/api/data', dataRoutes);
app.use('/api/profile', profileRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
