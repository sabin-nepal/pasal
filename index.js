const express = require('express')
const app = express();
const dotenv = require("dotenv");
var bodyParser = require('body-parser')

//load env variales
dotenv.config({
	path: './config/.env'
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//initialize db

require('./config/connection');

//initialize port
const port = process.env.PORT || 8080
const api_prefix = process.env.API_PREFIX
//routes path
const auth = require('./routes/auth')
//routes product
const product = require('./routes/product')

//routes middelwares
app.use(api_prefix + 'auth',auth)
app.use(api_prefix + 'product',product)

app.get('/', function(req,res){
    res.send('Welcome')
})



app.listen(port)