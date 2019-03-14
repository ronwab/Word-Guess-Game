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
function computerOptions() {
  var computerCountrySelection = Math.floor(Math.random() * 7);
  computerGeneratedOption = randomCountry[computerCountrySelection];
  console.log(computerGeneratedOption);
}

//User keyboard input
function userKeyboardInput() {
  document.addEventListener("keyup", function(e) {
    userInput = e.key;
    // display user input value

    document.getElementById("guessesdone").innerHTML += userInput;

    //decrease counter value
    document.getElementById("guessesLeft").innerHTML = counter--;

    // calls computer input function
    computerOptions();

    // call compare input function
  });
}

userKeyboardInput();

//Stop game
var test2 = "abcde";
function comparetwo() {
  if (
    "c" ===
    function one() {
      for (i of test2) {
        console.log(i);
      }
    }
  ) {
    console.log("Twins");
  } else {
    console.log("NOPE no Twins");
  }
}
comparetwo();

//increase counter
// Compare user input to computer
// function compareinputs() {
//   for (a = 0; a < computerGeneratedOption.length; a++) {
//     if (userInput === computerGeneratedOption[a]) {
//       console.log("You exist");
//     }
//   }
// }
// function compareInputs() {
//   userKeyboardInput();
//   const stringb = computerGeneratedOption;
//   for (let characterb in stringb) {
//     if ("c" === stringb[characterb]) {
//       console.log("Match");
//     } else console.log("no bweno");
//   }
// }
// compareInputs();
