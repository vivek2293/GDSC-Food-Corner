const express = require('express')
const feed = express()

feed.get('/', (req,res)=>{
    res.send("This is just a landing page.")
});

feed.post('/order', (req,res)=>{
    const data = (JSON.stringify(req.body));
    console.log(data);
})

module.exports = feed;