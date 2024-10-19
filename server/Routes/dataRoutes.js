const express = require('express');
const Data = require('../models/Data');
const router = express.Router();

// POST route to store data in MongoDB
router.post('/', async (req, res) => {
  const { title, description } = req.body;

  try {
    const newData = new Data({ title, description });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
