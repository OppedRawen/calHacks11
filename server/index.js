const express = require('express');

const app = express();
const dataRoutes = require('./routes/dataRoutes');
const connectDB = require('./config/db');
const profileRoutes = require('./routes/profileRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

// Enable CORS
app.use(cors());
// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;


// Middleware to parse JSON requests
app.use(express.json());


// Use the data routes for API requests
app.use('/api/data', dataRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/auth', authRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

