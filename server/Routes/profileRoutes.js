const express = require('express');
const { saveProfile } = require('../controllers/profileController');
const router = express.Router();

// Route to save profile data
router.post('/save-profile', saveProfile);

module.exports = router;
