// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//declare vars for installed packages
var path = require('path');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });



    //TA QUESTION: How do I link all of the work I did in the html doc to this. 
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body
        res.json(newFriend)
    });

}