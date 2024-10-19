const express = require('express');
const { saveProfile, getProfile, exportProfileAsJSON } = require('../controllers/profileController');
const router = express.Router();

// Route to save or update the user's profile
router.post('/save-profile', saveProfile);

// Route to retrieve the user's profile
router.get('/profile/:id', getProfile);

// Route to export the user's profile as a JSON file
router.get('/profile/export/:id', exportProfileAsJSON);

module.exports = router;
