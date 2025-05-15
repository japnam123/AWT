const orders = require('../models/orders');

exports.placeOrder = (req, res) => {
  const { userId, restaurantId, items } = req.body;
  const newOrder = {
    id: orders.length + 1,
    userId,
    restaurantId,
    items,
    status: 'pending'
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

exports.getUserOrders = (req, res) => {
  const userId = parseInt(req.params.userId);
  const userOrders = orders.filter(o => o.userId === userId);
  res.json(userOrders);
};
