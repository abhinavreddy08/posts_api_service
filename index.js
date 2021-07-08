const express = require("express");

const mongoose = require("mongoose");
const app = express();
require('dotenv/config');
app.use(express.json());

const postRoute = require('./routes/post');
app.use('/posts',postRoute);


app.get('/', (req,res)=>{
    res.send("Basic connection with node");
});

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{
    console.log("database connected");
})

app.listen(3000,()=>{
    console.log("running server at http://localhost:3000/");
});