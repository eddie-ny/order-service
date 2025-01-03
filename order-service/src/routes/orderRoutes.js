// orderRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder, viewOrder, updateOrderStatus } = require('../controllers/orderController');

// Route for creating an order
router.post('/orders', createOrder);

// Route for viewing an order by ID
router.get('/orders/:id', viewOrder);

// Route for updating the order status (e.g., confirming an order)
router.put('/orders/:id/status', updateOrderStatus);

module.exports = router;
