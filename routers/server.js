// importing modules
const express = require('express')
const feed = express()
const mongoose = require('mongoose')
const pdf = require('../service/pdf-creation.js')
const Order = require('../schema/schema.js')
require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('connected')
});

// Receiving order and saving it to database using mongoose
feed.post('/order', async (req, res) => {
    // Creating order object to save in database as per schema
    const currentOrder = new Order({
        date: new Date(),
        biryani: (req.body).biryani,
        butterChicken: (req.body).butterChicken,
        shahiPaneer: (req.body).shahiPaneer,
        naan: (req.body).naan,
        roti: (req.body).roti,
        dal: (req.body).dal,
        rice: (req.body).rice,
        choleBhature: (req.body).choleBhature,
        pizza: (req.body).pizza,
        burger: (req.body).burger,
        cost: (req.body).cost
    });
    try {
        const savedcurrentOrder = await currentOrder.save(); //Saving order to database
        res.json(savedcurrentOrder);
    } catch (err) {
        res.json({ message: err });
    }
});

// Receiving ID of completed order and generating pdf invoice along with deleting the order from database
feed.post('/completed', async (req, res) => {
    const objID = req.body.id;
    let objData = await Order.findOne({ _id: objID });
    // Sending order object from databse to pdf-creation.js for generating invoice
    feed.get(`/invoice+${objID}`, async (req, res) => {
        const stream = res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment;filename=${objID}.pdf`
        })
        pdf.generateInvoice(
            objData,
            (chunk) => stream.write(chunk),
            () => stream.end()
        );
    });

    // Deletion of completed order
    async function run() {
        await Order.deleteOne({ _id: req.body.id });
    }
    run();
})

module.exports = feed;