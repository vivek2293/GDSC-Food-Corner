const express = require('express')
const feed = express()
const mongoose = require('mongoose')
const pdf=require('../service/pdf-creation.js')
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
        isComplete: (req.body).isComplete,
        cost:(req.body).cost
    });
    try{
        const savedcurrentOrder = await currentOrder.save();
        res.json(savedcurrentOrder);
    }catch(err){
        res.json({message: err});
    }
});

feed.get('/invoice',(req,res)=>{
    const stream= res.writeHead(200,{
        'Content-Type':'application/pdf',
        'Content-Disposition':'attachment;filename=invoice.pdf'
    })
    const objData={
        biryani:240,
        naan:0,
        burger:340
    };
    pdf.generateInvoice(
        objData,
        (chunk)=>stream.write(chunk),
        ()=>stream.end()
    );
});

feed.post('/completed', (req,res) =>{
    async function run(){
        await Order.deleteOne({ _id: req.body.id});
    }

    run();
})

module.exports = feed;