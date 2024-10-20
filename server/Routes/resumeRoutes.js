const express = require('express');
const { uploadResume } = require('../controllers/resumeController');
const router = express.Router();
const multer = require('multer');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique file name
  }
});

const upload = multer({ storage: storage });

// Route to upload resume
// router.post('/upload', upload.single('resume'), uploadResume);
router.post('/upload', upload.single('resume'), (req, res, next) => {
  console.log('Upload route hit, file:', req.file);
  next();
}, uploadResume);

module.exports = router;