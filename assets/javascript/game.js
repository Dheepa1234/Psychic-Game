//Create a variable that equals the value of letter choices available on the computer that the app can pick and the user can guess
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f'. 'g', 'h,'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x,', 
        'y,' 'z' ]

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//Create a variable that equals the value of a random letter from the available choices
var computerGuess = computerChoices (Math.floor(Math.random() *computerChoices.length)];

//Create a variable that equals the value of updated guesses left and instructs the function

//guesses = guesses || 9
var updateGuessesLeft = function () {
    //Use a document query slector that equals it to the gueses left (,e
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " +guessesLeft;
};

var updateLetterToGuess = function () {
    this.letterToGuess = this.computerChoices (Math.floor(Math.random() *this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
    //The document query selection will take the guess the user has tried and display it as letters separated
      by commas
    document.querySelector ('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join (',');
};

//Create a variable that equals the value of a function that instructs the reset of everything

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLettertoGuess ();
    updateGuessesLeft ();
    updateGuessesSoFar();
}

updateLettertoGuess();
updateGuessesLeft();

//Create a method for releasing the key when it is the user's guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push (userGuess);
  updateGuessesLeft ();
  updateGuessesSoFar ();

        if (guessesLeft >0) {
            if (userGuess == lettertoGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
};
