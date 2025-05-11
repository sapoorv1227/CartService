require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(express.json());
app.use('/cart', cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Cart Service running on port ${PORT}`));