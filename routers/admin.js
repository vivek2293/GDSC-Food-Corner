const express = require('express')
const feed = express()
const mongoose = require('mongoose')
const Order=require('../schema/schema.js')
require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION,() =>{
    console.log('connected')
});

feed.get('/all-orders',async (req,res)=>{
    const orders= await Order.find();
    console.log(orders);
    res.send(orders);
})

module.exports=feed;