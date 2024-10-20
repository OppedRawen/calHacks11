const express = require('express');
const { saveTranscript } = require('../controllers/transcriptController');
const router = express.Router();

router.post('/save', saveTranscript);

module.exports = router;