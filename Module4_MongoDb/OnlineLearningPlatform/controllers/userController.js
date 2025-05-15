const User = require('../models/userModel');

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
};

module.exports = { getUsers };
