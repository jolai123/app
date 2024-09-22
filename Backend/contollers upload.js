// controllers/uploads.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  const file = req.file;
  // Store the file in the database or file system
  res.send({ message: 'File uploaded successfully' });
});

module.exports = router;