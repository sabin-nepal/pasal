const express = require('express')
const app = express();
const db = require('./config/connection');
app.get('/', function(req,res){
    res.send('hello node js from nodemon')
})



app.listen(8080)