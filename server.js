//declare vars for installed packages
var express = require('express');
var path = require('path');

//Setting up express
var app = express();
var PORT = process.env.PORT || 4004;

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "app/public")));

//import app variable from html
require("./app/routing/htmlRoutes")(app);

require("./app/routing/apiRoutes")(app);


//Listener
app.listen(PORT, function(){
    console.log("App listening on: http://localhost:" + PORT);
});


  
