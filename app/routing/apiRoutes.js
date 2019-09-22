//declare vars for installed packages (may not need)
// var path = require('path');

//require the empty 'friends' array that we created and exported in superFriends.js
var friends = require("../data/superFriends.js")

// var friends = [];

//Export our function to server.js, which will allow us to take in the express() app in that file and run these routing commands
module.exports = function (app) {
    //This route displays in JSON format the friends array that we have created
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    //This route (when hit) adds newFriend (the body of the request that the user is posting) into the friends array and displays it
    app.post("/api/friends", function (req, res) {
        //put object returned from friends.js AJAX post request into variable here, push into array of existing friends
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(friends)
    });
}