const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

app.use(cors())
app.use(express.json())
app.use(require('./routers/app.js'))

mongoose.connect('mongodb+srv://shreyshah:Googleit%40123@cluster0.fesqe.mongodb.net/?retryWrites=true&w=majority',() =>{
    console.log('connected')
});

app.listen(3000)