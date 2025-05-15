const Transaction = require('../models/Transaction');
const User = require('../models/User');

exports.createTransaction = async (req, res) => {
  const { recipientEmail, amount } = req.body;
  const recipient = await User.findOne({ email: recipientEmail });
  if (!recipient) return res.status(404).json({ message: 'Recipient not found' });

  const transaction = await Transaction.create({
    sender: req.user._id,
    recipient: recipient._id,
    amount
  });

  res.status(201).json({ message: 'Transaction successful', transaction });
};

exports.getMyTransactions = async (req, res) => {
  const transactions = await Transaction.find({
    $or: [{ sender: req.user._id }, { recipient: req.user._id }]
  }).populate('sender recipient', 'name email');
  res.json(transactions);
};
