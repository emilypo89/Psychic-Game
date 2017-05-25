
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var totalGuess = 10;
var guessCount = 0;
var displayGuess = [];
  

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = options[Math.floor(Math.random() * options.length)];
    displayGuess.push(userGuess);


if (userGuess === computerGuess){
  wins++;
  reset();
}

else if (userGuess !== computerGuess){
  totalGuess--;
  guessCount++;
}    

if (totalGuess < 1) {
  losses++;
  reset();
}

var updateWins = '<p>Wins: ' + wins +'</p>';
var updateLosses = '<p>Losses: ' + losses +'</p>';
var updateTotalGuess = '<p>Number of Guesses Left: ' + totalGuess +'</p>';
var updateGuessCount = '<p>Number of Guesses so far: ' + guessCount + '</p>';
var updateDisplayGuess = '<p> Guessed letters: ' + displayGuess + '</p>';


var gameDiv = document.getElementById("game");

gameDiv.innerHTML = updateWins + updateLosses + updateTotalGuess + updateGuessCount + updateDisplayGuess;


}

function reset() {
  totalGuess = 10;
  guessCount = 0;
  displayGuess = [];
}
     
