const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// GET /api/news
router.get('/', async (req, res) => {
  try {
    const category = req.query.category || 'general';
    const country = req.query.country || 'in';

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEWS_API_KEY}`;
    const response = await axios.get(url);

    res.json({
      status: 'success',
      totalResults: response.data.totalResults,
      articles: response.data.articles
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

module.exports = router;
