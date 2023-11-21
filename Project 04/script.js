//generating random number, converting them into integer *100 and +1 to generate number from 1 to 100
let randomNumber = parseInt(Math.random() * 100 + 1);
//selecting input
const userInput = document.querySelector("#inputField");
//selecting submit button
const guessButton = document.querySelector("#guessButton");
//selecting previous Guess
const prevGuess = document.querySelector(".prevGuess");
//selecting Remaining Guess
const guessRemain = document.querySelector(".guessRemain");
//selecting low or high indicator
const lowOrHigh = document.querySelector(".lowOrHigh");
//selecting element to start over
const startOver = document.querySelector(".result");
//adding an element to show the result
const p = document.createElement("p");

//shwoing previous guess
let previousGuesses = [];
//attempts already done
let numberOfGuess = 1;
//variable to start game
let playGame = true;

if (playGame) {
  guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

//function for validating a guess whether a user give number, less or more than specified number etc
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number smaller than 101");
  } else {
    previousGuesses.push(guess);
    if (numberOfGuess === 11) {
      displayGuess(guess);
      dispalyMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//to print guessed value output
function checkGuess(guess) {
  if (guess === randomNumber) {
    dispalyMessage(
      `You have guessed it right. Random number was ${randomNumber}`
    );
    endGame();
  } else if (guess < randomNumber) {
    dispalyMessage(`Number is Tooo low`);
  } else if (guess > randomNumber) {
    dispalyMessage(`Number is Tooo high`);
  }
}

//updating previous guess, remaining guess
function displayGuess(guess) {
  //when you click it will clear the input
  userInput.value = "";
  prevGuess.innerHTML += `${guess}, `;
  numberOfGuess++;
  guessRemain.innerHTML = `${11 - numberOfGuess}`;
}

//for result
function dispalyMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

//to end game
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

//to start game
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numberOfGuess = 1;
    prevGuess.innerHTML = "";
    guessRemain.innerHTML = `${11 - numberOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
