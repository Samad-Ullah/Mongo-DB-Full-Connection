var express = require("express")
var cors = require("cors");
const bodyparser = require("body-parser");
//const mongoose = require("mongoose");
//require('dotenv').config();
//const MongoClient = require('mongodb').MongoClient;
var conn = require('./DB/connection')


const app = express();
conn();
const port = process.env.PORT || 5000;
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

///api
const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');
app.use('/exercises' , exerciseRouter);
app.use('/users' , userRouter);
/////

app.listen(port , (req , res)=>{

    console.log(`your server run on ${port}`)

})