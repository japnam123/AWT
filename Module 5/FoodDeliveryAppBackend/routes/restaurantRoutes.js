const express = require('express');
const router = express.Router();
const { getAllRestaurants, getRestaurantMenu } = require('../controllers/restaurantController');

router.get('/', getAllRestaurants);
router.get('/:id/menu', getRestaurantMenu);

module.exports = router;
