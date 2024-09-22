// controllers/pages.js
const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

router.get('/', async (req, res) => {
  const pages = await Page.find().exec();
  res.send(pages);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const page = new Page({ title, content });
  await page.save();
  res.send({ message: 'Page created successfully' });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const page = await Page.findById(id).exec();
  if (!page) return res.status(404).send({ message: 'Page not found' });
  res.send(page);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const page = await Page.findByIdAndUpdate(id, { title, content }, { new: true }).exec();
  if (!page) return res.status(404).send({ message: 'Page not found' });
  res.send({ message: 'Page updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Page.findByIdAndRemove(id).exec();
  res.send({ message: 'Page deleted successfully' });
});

module.exports = router;