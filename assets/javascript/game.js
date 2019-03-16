var randomCountry = [
  "afghanistan",
  "belgium",
  "cameroon",
  "russia",
  "panama",
  "colombia"
];

//Computer selects random country name
var countryRandomlySelected;
var userInput;
var counter = 9;
var lossCounter = 0;
var winCounter = 0;
var userInputArray = [];

function userKeyboardInput() {
  generateRandomCountry();
  document.addEventListener("keyup", function(e) {
    userInput = e.key.toLowerCase();
    displayUserInput();
    decreaseCounter();
  });
}

function startGame() {
  alert("LETS ROCK AND ROLL");
  userKeyboardInput();
}
startGame();

function displayUserInput() {
  if (counter > 0) {
    document.getElementById("guessesdone").innerHTML += `${userInput} `;
  }
}

function decreaseCounter() {
  if (counter > 0) {
    document.getElementById("guessesLeft").innerHTML = counter--;
    trackWinsOrLosses();
  } else {
    alert("GAME OVER");
    resetGame();
  }
}
function trackWinsOrLosses() {
  var displayMe = countryRandomlySelected.indexOf(userInput);
  if (displayMe >= 0) {
    winCounter++;
    document.getElementById("win").innerHTML = winCounter;
  } else {
    lossCounter++;
    document.getElementById("losses").innerHTML = lossCounter;
  }
}

function resetGame() {
  userInput = "";
  counter = 9;
  lossCounter = 0;
  winCounter = 0;
  document.getElementById("losses").innerHTML = lossCounter;

  document.getElementById("win").innerHTML = winCounter;
  document.getElementById("guessesLeft").innerHTML = counter;
  document.getElementById("guessesdone").innerHTML = userInput;
}

function generateRandomCountry() {
  var randomComputerNumber = Math.floor(Math.random() * 6);

  countryRandomlySelected = randomCountry[randomComputerNumber].toLowerCase();

  console.log(countryRandomlySelected);
}

// function iterateUserInputOverCompOption() {
//   for (let i = countryRandomlySelected.length - 1; i >= 0; i--) {
//     if (countryRandomlySelected[i] === userInput) {
//       countryRandomlySelected.splice(i, 1);
//     }
//   }
// }
// iterateUserInputOverCompOption();
