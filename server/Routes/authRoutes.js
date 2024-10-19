const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Logout Route (optional if using JWT or sessions)
router.post('/logout', logoutUser);

module.exports = router;
