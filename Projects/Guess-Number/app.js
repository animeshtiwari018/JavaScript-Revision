const randomNum = parseInt(Math.random() * 20 + 1);

const submit = document.querySelector("btn check");
const reset = document.querySelector("btn again");
const num = document.querySelector("number");
const userInput = document.querySelector("guess");
const messageGuess = document.querySelector("message");
const Remaining = document.querySelector("score");
const score = document.querySelector("highscore");

let prevGuess = [];
let newGuess = 1;
let startGame = true;

if (startGame) {
  submit.addEventListener("click", function (e) {
    const guess = parseInt(userInput.value);
    validateGuess();
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a value greater than 1");
  } else if (guess <= 20) {
    alert("Please enter a value less than 20");
  } else {
    prevGuess.push();
    if (newGuess === 11) {
      displayGuess(guess);
      dispalyMessage(`Your game is over. Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNum)
}

function displayGuess(guess) {
  //
}

function dispalyMessage() {
  //
}

function endGame() {
  //
}

function newGame() {
  //
}
