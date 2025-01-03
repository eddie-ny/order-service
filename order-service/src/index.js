// index.js
const express = require('express');
const app = express();
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const { DATABASE_URL } = process.env;

console.log("DATABASE_URL:", process.env.DATABASE_URL);
app.use(express.json());

// Use order routes
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});

