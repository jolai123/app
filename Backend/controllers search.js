// controllers/search.js
const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

router.get('/', async (req, res) => {
  const query = req.query.q;
  const pages = await Page.find({ $text: { $search: query } }).exec();
  res.send(pages);
});

module.exports = router;