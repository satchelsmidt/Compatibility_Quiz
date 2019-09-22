//declare vars for installed packages
var path = require('path');

//export function that takes in a variable (which in this case is an app, but in the server.js file that we require it in, is the express() function)
module.exports = function (app) {
    //The root directory path of our application, which islinked to our homt html page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
    //The /survey path of our application, which is linked to our survey html page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

}
