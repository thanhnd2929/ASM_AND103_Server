const express = require('express');
const router = express.Router();
const History = require('../models/historyModel');

// API endpoint để thêm đơn hàng vào history
router.post('/history', async (req, res) => {
  try {
    const { userId, productName, totalPrice } = req.body;
    const newHistory = new History({ userId, productName, totalPrice });
    await newHistory.save();
    res.status(200).json({ message: 'Order added to history successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding order to history', error });
  }
});

// API endpoint để lấy tất cả đơn hàng từ history
router.get('/history', async (req, res) => {
  try {
    const histories = await History.find({});
    res.status(200).json(histories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders from history', error });
  }
});

module.exports = router;
