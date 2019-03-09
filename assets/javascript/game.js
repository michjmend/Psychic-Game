var computerChoices = ["a", "b" , "c", "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var guessesSoFarText = document.getElementById("guessessofar-text");

    document.onkeyup = function(event) {
      // Determines which key was pressed.
      var userGuess = event.key;
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      if (guessesLeft != 0) {

      if (userGuess === computerGuess) {
          wins++;
          guessesLeft = 9;
          guessesSoFar = [];
        }
        if (userGuess != computerGuess) {
          guessesLeft --;
          guessesSoFar.push(userGuess);
        }
        if (guessesLeft === 0) {
          guessesLeft = 9;
          losses++;
          guessesSoFar = [];
        }
       // Display the wins/losses/guesses left/guesses so far
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses So far: " + guessesSoFar.toString();
      }
    }
