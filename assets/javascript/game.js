var randomCountry = [
  "afghanistan",
  "belgium",
  "cameroon",
  "russia",
  "panama",
  "colombia"
];

//Computer selects random country name
var computerGeneratedOption;
var userInput;
var counter = 9;
var lossCounter = 0;
var winCounter = 0;
var userInputArray = [];

function generateRandomCountry() {
  var computerCountrySelection = Math.floor(Math.random() * 6);

  computerGeneratedOption = randomCountry[computerCountrySelection];

  console.log(computerGeneratedOption);
}

function userKeyboardInput() {
  generateRandomCountry();
  document.addEventListener("keyup", function(e) {
    // given counter is at 0, this is my last chance
    // the actual letter is e
    // I select k
    userInput = e.key;
    displayUserInput();
    increaseCounter();

    trackWinsOrLosses();
  });
}
userKeyboardInput();

function startGame() {}

function displayUserInput() {
  if (counter > 0) {
    document.getElementById("guessesdone").innerHTML += `${userInput} `;
  } else {
    // resetAllCounters();
  }
}

function increaseCounter() {
  if (counter > 0) {
    document.getElementById("guessesLeft").innerHTML = counter--;
  } else {
    alert("GAME OVER");
    resetAllCounters();
  }
}
function trackWinsOrLosses() {
  var displayMe = computerGeneratedOption.indexOf(userInput);
  if (displayMe >= 0) {
    winCounter++;
    document.getElementById("win").innerHTML = winCounter;
  } else {
    lossCounter++;
    document.getElementById("losses").innerHTML = lossCounter;
  }
}

// Reset all counters.. ******* WORK ON THIS figure out why losses is not resetting
function resetAllCounters() {
  userInput = "";
  counter = 9;
  lossCounter = 0;
  winCounter = 0;
  document.getElementById("losses").innerHTML = lossCounter;

  document.getElementById("win").innerHTML = winCounter;
  document.getElementById("guessesLeft").innerHTML = counter;
  document.getElementById("guessesdone").innerHTML = userInput;
}
