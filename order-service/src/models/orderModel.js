// orderModel.js
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const createOrder = async (buyerId, sellerId, products, totalAmount) => {
    const query = `
        INSERT INTO orders (buyer_id, seller_id, products, total_amount, status)
        VALUES ($1, $2, $3, $4, 'Pending') RETURNING *`;
    const values = [buyerId, sellerId, JSON.stringify(products), totalAmount];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const getOrderById = async (orderId) => {
    const query = 'SELECT * FROM orders WHERE id = $1';
    const result = await pool.query(query, [orderId]);
    return result.rows[0];
};

const updateOrderStatus = async (orderId, status) => {
    const query = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *';
    const values = [status, orderId];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = { createOrder, getOrderById, updateOrderStatus };
