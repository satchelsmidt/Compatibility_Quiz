//CODE BEGIN

//declare our friends array (with fake data so that we can actually get results)
var friends = [{
    name: "Stacy",
    photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    scores: [3, 3, 5, 4, 2, 1, 1, 3, 4, 2]
},
{
    name: "Carlito",
    photo: "https://images.unsplash.com/photo-1470071131384-001b85755536?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    scores: [1, 1, 3, 4, 5, 4, 1, 1, 2, 5]
},
{
    name: "Donovan",
    photo: "https://images.unsplash.com/photo-1553633524-ff55f80e2ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    scores: [5, 5, 5, 4, 5, 5, 5, 2, 4, 2]
},
{
    name: "Jack",
    photo: "https://images.unsplash.com/photo-1485873756299-c2c6b70a8841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    scores: [2, 1, 1, 1, 3, 2, 2, 3, 1, 1]
},
{
    name: "Emma",
    photo: "https://images.unsplash.com/photo-1568909218940-9ca084ad57de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    scores: [1, 5, 5, 2, 4, 1, 1, 2, 3, 2]
}];

//Get modal elements from html and declare as vars
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

//on-click function for submit button that takes in user inputs and converts them to JSON format, pushes them to friends array
$("#submitButton").on("click", function (e) {
    //prevent default action of submit (which is to refresh the page)
    e.preventDefault();

    //Create the scores variable (empty array)
    var scores = []

    //function that loops through all 'selectResponse' class items (inputs for select options) and records the selected box+ converts to ints
    $(".selectResponse").each(function (index, value) {
        var selectedOption = parseInt($(this).children("option:selected").val())
        console.log(selectedOption)
        //Push each selected option to our scores array
        scores.push(selectedOption);
    });

    //Variable in object format to record responses
    var newFriend = {
        name: $("#userName").val().trim(),
        photo: $("#userPhoto").val().trim(),
        scores: scores
    }

    console.log("NEW FRIEND: ", newFriend)

    //TODO:empty text boxes/select boxes reset
    // $("#userName").val().empty()
    // $("#userPhoto").val().empty()

    //push new friend to friends array
    friends.push(newFriend);
    console.log("ARRAY OF FRIENDS: ", friends);

    //POST TO api/friends route with updated 'friends' array
    $.post({
        url: "/api/friends",
        data: newFriend
    }).then(function (response) {
        console.log("response of post req", response);

    })

    //Run function to compare new friend to all other friends in array 
    compareScores()
})

//This function finds the two users in the array with the most compatibility
function compareScores() {

    //Capture total score of most recently added user in a var
    var newUserTotalScore = ((friends.slice(-1))[0].scores).reduce(totalScore)
    //Create empty arraysto hold score values and respective friend objects for each
    var diffs = []
    var otherFriends = []

    //Create function to sum user scores easily
    function totalScore(total, num) {
        return total + num;
    }

    console.log("NEW USER TOTAL SCORE:", newUserTotalScore)

    //Create for loop to iterate through friends array, find differences in score for each (compared to most recent user score)
    for (let i = 0; i < (friends.length) - 1; i++) {
        userTotalScore = (friends[i].scores).reduce(totalScore)
        var whichFriend = friends[i]

        diff = Math.abs(userTotalScore - newUserTotalScore)

        console.log("Friend: ", whichFriend)
        console.log("Difference: ", diff)

        otherFriends.push(whichFriend)
        diffs.push(diff)
    }

    //Declare variable of most compatible user by finding index for user in otherFriends array that matches index of lowest difference in score

    var matchedUser = otherFriends[diffs.indexOf(Math.min.apply(null, diffs))].name
    var matchedImage = otherFriends[diffs.indexOf(Math.min.apply(null, diffs))].photo

    //Display modal and set name/image to the user with closest compatibility
    modal.style.display = "block";
    $("#modalName").text(matchedUser)
    $("#modalImage").attr("src", matchedImage)
}

//Functions to close/exit modal screen
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}