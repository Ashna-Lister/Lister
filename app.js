const express = require('express');
let nunjucks = require('nunjucks');

// initialise express
const app = express();
// define the port
const port = 8000;

const homeRoute = require('./routes/home');

// route => specifying the path with a request and a response
// app.get("/",(req,res) => {
//     res.sendfile('home.html')
// });

// nunjucks
app.set("view engine","html");
nunjucks.configure(["views/"],{
    autoescape: false,
    express: app
})


app.use("/",homeRoute)
// initialising the port with listen
app.listen(port,()=>{
    console.log("started on",port);
})