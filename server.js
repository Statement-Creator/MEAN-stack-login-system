const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connecting mongoose to mongodb
mongoose.connect('mongodb://localhost:27017/login-system');

mongoose.connection.on('connected',()=>{
    console.log('Database connected.')
})

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
const api = require('./routes/routes');
app.use('/api',api);

//endpoint
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint.');
})

//start server
app.listen(3000,function(){
    console.log('Server started.')
})