const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dataRoutes = require('./Routes/dataRoutes');
const authRoutes = require('./Routes/authRoutes');
const profileRoutes = require('./Routes/profileRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();
console.log(process.env.MONGO_URI);
// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);
app.use('/api/auth', require('./Routes/authRoutes'));
app.use('/api/userProfile',profileRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
