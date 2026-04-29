let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let prevGuess = [];
let gameActive = true;

const submit = document.querySelector(".btn.check");
const reset = document.querySelector(".btn.again");
const num = document.querySelector(".number");
const userInput = document.querySelector(".guess");
const messageGuess = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");

submit.addEventListener("click", function () {
  if (!gameActive) return;

  const guess = parseInt(userInput.value);

  if (isNaN(guess) || guess < 1 || guess > 20) {
    displayMessage("Please enter a number between 1 and 20");
    return;
  }

  prevGuess.push(guess);

  if (guess === randomNum) {
    displayMessage("You guessed it right!");
    num.textContent = randomNum;
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
    endGame();
  } else {
    score--;
    scoreElement.textContent = score;
    if (guess > randomNum) {
      displayMessage("Too high!");
    } else {
      displayMessage("Too low!");
    }

    if (score === 0) {
      displayMessage(`Game over! The number was ${randomNum}`);
      endGame();
    }
  }
});

reset.addEventListener("click", newGame);

function displayMessage(msg) {
  messageGuess.textContent = msg;
}

function endGame() {
  gameActive = false;
  submit.disabled = true;
}

function newGame() {
  randomNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreElement.textContent = score;
  num.textContent = "?";
  userInput.value = "";
  displayMessage("Start guessing...");
  gameActive = true;
  submit.disabled = false;
  prevGuess = [];
}

// Initialize the game
newGame();
