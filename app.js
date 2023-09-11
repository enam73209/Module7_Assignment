const express = require('express');
const app = new express();
const router = require('./src/Routes/api');

app.use('/api/v1',router);
//undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({
        status:"Fail",
        data:"Not Found"
    })
})
module.exports = app;