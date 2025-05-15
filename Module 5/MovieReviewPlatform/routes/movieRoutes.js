const express = require('express');
const router = express.Router();
let movies = require('../data/movies');

// Homepage: show all movies
router.get('/', (req, res) => {
  res.render('index', { movies });
});

// Movie detail
router.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).send('Movie not found');
  res.render('movie', { movie });
});

// Add a review
router.post('/movies/:id/review', (req, res) => {
  const movie = movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).send('Movie not found');
  const { review } = req.body;
  if (review) movie.reviews.push(review);
  res.redirect(`/movies/${movie.id}`);
});

module.exports = router;
