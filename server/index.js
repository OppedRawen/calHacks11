const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dataRoutes = require('./Routes/dataRoutes');

// Load environment variables
dotenv.config();
console.log(process.env.MONGO_URI);
// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
