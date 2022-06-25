const express = require('express');
const admin = express();
const mongoose = require('mongoose')
const Order = require('../schema/schema.js')
require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected')
});

admin.set('view engine', 'ejs');
admin.set('views', 'admin/views');

admin.get('/admin', async (req, res) => {
    const orders = await Order.find();
    res.render('index', { orders });
    // console.log(orders);
});

module.exports = admin;