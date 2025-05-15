const restaurants = require('../models/restaurants');

exports.getAllRestaurants = (req, res) => {
  res.json(restaurants);
};

exports.getRestaurantMenu = (req, res) => {
  const restaurant = restaurants.find(r => r.id == req.params.id);
  if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
  res.json({ menu: restaurant.menu });
};
