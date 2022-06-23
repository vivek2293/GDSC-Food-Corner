const express=require('express');
const admin=express();

admin.set('view engine','ejs');

admin.get('/admin',(req,res)=>{
    res.render('index'); 
})