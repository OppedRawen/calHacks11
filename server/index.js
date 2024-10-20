const express = require('express');

const app = express();
const dataRoutes = require('./routes/dataRoutes');
const connectDB = require('./config/db');
const profileRoutes = require('./routes/profileRoutes');
const authRoutes = require('./routes/authRoutes');
const experienceRoutes = require('./Routes/experienceRoutes');
const transcriptRoutes=require('./Routes/transcriptRoutes');
const resumeRoutes=require('./Routes/resumeRoutes');
const path = require('path');

const cors = require('cors');

// Enable CORS
app.use(cors());
// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;


// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files


// Use the data routes for API requests
app.use('/api/data', dataRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/transcript', transcriptRoutes);
app.use('/api/resume', (req, res, next) => {
  console.log('Resume route hit:', req.method, req.url);
  next();
}, resumeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

