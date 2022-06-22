const express = require('express')
const feed = express()
const mongoose = require('mongoose')
const Order=require('../schema/schema.js')
require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION,() =>{
    console.log('connected')
});

feed.get('/', (req,res)=>{
    res.send("This is just a landing page.")
});

feed.post('/order', async (req,res)=>{
    const currentOrder=new Order({
        date:new Date(),
        biryani :(req.body).biryani ,
        butterChicken: (req.body).butterChicken,
        shahiPaneer: (req.body).shahiPaneer,
        naan: (req.body).naan,
        roti: (req.body).roti,
        dal: (req.body).dal,
        rice: (req.body).rice,
        choleBhature: (req.body).choleBhature,
        pizza: (req.body).pizza,
        burger: (req.body).burger,
        isComplete: 0
    });
    try{
        const savedcurrentOrder = await currentOrder.save();
        res.json(savedcurrentOrder);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = feed;