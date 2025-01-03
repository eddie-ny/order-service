// orderController.js
const { placeOrder, getOrder, updateOrder } = require('../services/orderService');
const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
    const { productId, userId, quantity, price } = req.body;

    if (!productId || !userId || !quantity || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const orderDetails = await orderService.placeOrder({ productId, userId, quantity, price });
        res.status(201).json(orderDetails);
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ error: 'Error placing order' });
    }
};

const viewOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await getOrder(orderId);
        res.status(200).json({ order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.id;
        const { status } = req.body;
        const updatedOrder = await updateOrder(orderId, status);
        res.status(200).json({ message: 'Order status updated', order: updatedOrder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createOrder, viewOrder, updateOrderStatus };
