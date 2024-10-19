const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Logout Route (optional if using JWT or sessions)
// router.post('/logout', logoutUser);
router.get('/test', (req, res) => {
    res.send('Auth route is working');
  });
module.exports = router;
