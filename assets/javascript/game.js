// declare variables

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 10;

alert("Press ok to start");

// start game

	document.onkeyup = function() {

		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		var computerChoice = options[Math.floor(Math.random()*options.length)];
		console.log(computerChoice);
	
		if(userGuess === computerChoice) {
			wins++;
			alert("you win");
			guessesLeft = 9;
		}
		if(guessesLeft === 1) {
			losses++;
			alert("you lose");
			guessesLeft = 10;
		}
		if(userGuess !== computerChoice) {
			guessesLeft--;
		}
		
// game over
		
		if(guessesLeft === 9) {
			guessesSoFar = [];
		} else {
			guessesSoFar.push(" " + userGuess);
		}
		
// add stats
		
		var html = 
		"<h1>The Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your Guesses: " + guessesSoFar + "</p>";
		
		document.querySelector("#game").innerHTML = html;
	}