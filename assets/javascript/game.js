// GLOBAL VARIABLES 

var wordOptions = ["tiger", "shark", "cheeta", "lion", "giraffe", "rhino",
  "platypus", "eagle", "whale", "parrot", "flamingo", "kangaroo", "rabbit", "deer"];

var selectedWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS
// startGame()
function startGame() {

  
  numGuesses = 9;

  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersInChosenWord = selectedWord.split("");
  numBlanks = lettersInChosenWord.length;
  console.log(selectedWord);

  
  blanksAndSuccesses = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  console.log(blanksAndSuccesses);


  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// checkLetters() function
function checkLetters(letter) {

  var letterInWord = false;


  for (var i = 0; i < numBlanks; i++) {

    if (selectedWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {


    for (var j = 0; j < numBlanks; j++) {
      if (selectedWord[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
    console.log(blanksAndSuccesses);
  }

  else {

   
    wrongGuesses.push(letter);
    numGuesses--;

  }

}

function roundComplete() {
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    alert("You win!");

    document.getElementById("win-counter").innerHTML = winCounter;


    startGame();
  }


  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose");

    document.getElementById("loss-counter").innerHTML = lossCounter;

    startGame();

  }

}

// MAIN PROCESS
startGame();


document.onkeyup = function(event) {
  letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);

  roundComplete();
};

