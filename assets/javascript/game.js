var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerGuess;


// initial computer guess
var computerGuess = options[Math.floor(Math.random()*options.length)];
    console.log(computerGuess);

//game
document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

// game continues if user chooses an option in the array
if (options.indexOf(userGuess) > -1) {
if (userGuess === 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z') {   
alert("You chose " + userGuess);
  
    if (userGuess===computerGuess) {
    wins++;
    guessesLeft= 9;
    guessesSoFar = [];
    alert("You've guessed correctly!");
    }

    // if guesses don't match, minues a chance and document user's guesses so far
    if (userGuess !=computerGuess) {
    guessesLeft--;
    guessesSoFar.push(userGuess);
    }

    //if no more guesses, losses increase, guesses left restarts as game should restart
    if (guessesLeft===0) {
    losses++;
    guessesLeft = 9;
    guessesSoFar = [];
    alert("Nice try, young grasshopper!")

    }
}

// insert an else statement that alerts user to try again if they press a non
//alphabet value
//else { 
// alert ("Please choose a letter from 'a' to 'z'.");
// }

var html = 
"<h1>Scoreboard:</h1>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left:" + guessesLeft + "</p>" +
"<p>Guesses So Far:" + guessesSoFar + "</p>";

document.querySelector('#game').innerHTML = html;
//look at week 3 day 3 activity 34 for alt coding to update score
}


}