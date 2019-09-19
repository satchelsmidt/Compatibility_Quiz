//declare vars for installed packages
var express = require('express');
var path = require('path');

//Setting up express
var app = express();
var PORT = 4000;

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//import app variable from html
require("./app//routing/htmlRoutes")(app)

//Listener
app.listen(PORT, function(){
    console.log("App listening on: http://localhost:" + PORT);
})


  
