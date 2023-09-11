const express = require('express');
const app = new express();
const router = require('./src/Routes/api');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const ratelimit = require('express-rate-limit');
const limiter =ratelimit({windowMs:15 * 60 * 1000,max: 100});
const helmet = require('helmet');
const hpp = require('hpp');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//app.use(limiter());
app.use(helmet());
app.use(hpp());


//Application Routes
app.use('/api/v1',router);
//undefined routes
app.use('*',(req,res)=>{
    res.status(404).json({
        status:"Fail",
        data:"Not Found"
    })
})
module.exports = app;