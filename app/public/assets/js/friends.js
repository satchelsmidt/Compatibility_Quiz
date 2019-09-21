//CODE BEGIN

//declare our empty friends array
var friends = []

//on-click function for submit button that takes in user inputs and converts them to JSON format, pushes them to friends array
$("#submitButton").on("click", function(e){
    //prevent default action of submit (which is to refresh the page)
    e.preventDefault();

    //Create the scores variable (empty array)
    var scores = []

    //function that loops through all 'selectResponse' class items (inputs for select options) and records the selected box+ converts to ints
    $(".selectResponse").each(function (index, value){
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

    //TODO:empty text boxes 
    // $("#userName").val().empty()
    // $("#userPhoto").val().empty()
    //TODO: add in code to reset select boxes to 'select an option' 

    //push new friend to friends array
    friends.push(newFriend)
    console.log("ARRAY OF FRIENDS: ", friends)

    compareScores()

})

//This function finds the two users in the array with the most compatibility (NOT WHAT WE WANT BUT I WORKED SO HARD ON IT)
// function compareScores(){

//     var totalScoreArr = []

//     for (let i = 0; i < friends.length; i++) {
//         var totalScore = 0

//         for (let k = 0; k < friends[i].scores.length; k++) {
//             const score = friends[i].scores[k]
//             totalScore = totalScore + score
//             console.log("SCORE:", score)
//             console.log("TOTALSCORE:", totalScore)
//         }
//         totalScoreArr.push(totalScore)
//     }
//     console.log("TOTAL SCORE ARRAY: ", totalScoreArr)

//     for (let l = 0; l < totalScoreArr.length; l++) {
//         for (let j = l+1; j < totalScoreArr.length; j++) {
//             var diff = Math.abs(totalScoreArr[l]-totalScoreArr[j])

//             console.log("THE DIFFERENCE??:", diff)
//         }        
//     }
// }



//This function finds the two users in the array with the most compatibility
function compareScores(){

    var newUserTotalScore = ((friends.slice(-1))[0].scores).reduce(totalScore) 
    var diffs = []
    var otherFriends = []

    function totalScore(total, num){
        return total + num;
    }

    console.log("NEW USER TOTAL SCORE:", newUserTotalScore)

    for (let i = 0; i < (friends.length)-1; i++) {
        userTotalScore = (friends[i].scores).reduce(totalScore)
        var whichFriend = friends[i]

        diff = Math.abs(userTotalScore - newUserTotalScore)

        console.log("which Friend: ", whichFriend)
        console.log("OTHER SCORE: ", userTotalScore)
        console.log("difference: ", diff)

        otherFriends.push(whichFriend)
        diffs.push(diff)
    }

    console.log("array of differences:", diffs)
    console.log("array of corresponding friends:", otherFriends)
    //only run this when all characters 
    console.log("this should be person with min difference:", otherFriends[diffs.indexOf(Math.min.apply(null, diffs))])

    console.log("Name of person who is match: ", otherFriends[diffs.indexOf(Math.min.apply(null, diffs))].name)

    alert("you matched with: ", otherFriends[diffs.indexOf(Math.min.apply(null, diffs))].name)

    console.log("index value of diffs that we are looking for: ", diffs.indexOf(Math.min(diffs)))
    console.log("MIN VALUE AT index value of diffs that we are looking for: ", Math.min(diffs))
    console.log("Our diffs array as it goes on: ", diffs)
    
}













//grab survey element from html doc
// const surveyForm = document.getElementById("surveyForm")

// //run a function (which we will create) that converts form results to JSON
// const data = getFormData(form)


// function handleSubmit(e){
//     e.preventDefault();

//     const data = {}

//     const form = document.getElementById("surveyForm")
//     form.addEventListener('submit', handleSubmit);
//     console.log("PRint Something")
    
// }

// handleSubmit();