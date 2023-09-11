const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
app.listen(process.env.RUNNING_PORT,()=>{
    console.log("Server is Running Successfully on "+ process.env.RUNNING_PORT);
})