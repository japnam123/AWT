const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json({ message: "Order created", order });
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
};
