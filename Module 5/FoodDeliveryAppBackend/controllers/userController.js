const users = require('../models/users');

exports.getAllUsers = (req, res) => {
  res.json(users);
};
