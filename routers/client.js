const express = require('express')
const feed = express()
const mongoose = require('mongoose')
const Order=require('../schema/schema.js')
mongoose.connect('mongodb+srv://shreyshah:Googleit%40123@cluster0.fesqe.mongodb.net/?retryWrites=true&w=majority',() =>{
    console.log('connected')
});

feed.get('/', (req,res)=>{
    res.send("This is just a landing page.")
});

feed.post('/order', (req,res)=>{
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
        burger: (req.body).burger
    });
    currentOrder.save().then(result=>{
        console.log(result);
    });
})

module.exports = feed;