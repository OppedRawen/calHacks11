const express = require('express');

const router = express.Router();
const { createData, getData, deleteData } = require('../controllers/dataController');

// POST route to insert data
router.post('/', createData);

// GET route to fetch all data
router.get('/', getData);

// DELETE route to remove data by ID
router.delete('/:id', deleteData);


module.exports = router;
