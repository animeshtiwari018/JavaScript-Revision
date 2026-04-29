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
  //
}

function checkGuess(guess) {
  //
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
