const express = require('express');
const { createTransaction, getMyTransactions } = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createTransaction);
router.get('/', protect, getMyTransactions);

module.exports = router;
