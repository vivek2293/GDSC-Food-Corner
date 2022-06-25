// importing modules
const express = require('express');
const admin = express();
const mongoose = require('mongoose')
const Order = require('../schema/schema.js')
require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected')
});

// configuring ejs view engine
admin.set('view engine', 'ejs');
admin.set('views', 'admin/views');

// setting up index.ejs at /admin
admin.get('/admin', async (req, res) => {
    const orders = await Order.find();
    res.render('index', { orders });
});

module.exports = admin;