// routes/experienceRoutes.js

const express = require('express');
const { saveExperience } = require('../controllers/experienceController');
const router = express.Router();

// Route to save a new experience
router.post('/save', saveExperience);

module.exports = router;
