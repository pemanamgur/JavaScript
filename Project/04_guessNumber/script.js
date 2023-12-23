let randNumber = Math.floor(Math.random() * 100 + 1);
console.log(randNumber);
let guessCount = 1;

const inputField = document.getElementById("guessField");
const submitt = document.querySelector("#subt");
const guessed = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
let playGame = true;
if (playGame) {
  submitt.addEventListener("click", function (e) {
    e.preventDefault();
    let userGuess = parseInt(inputField.value);
    console.log(userGuess);
    validate(userGuess);
  });
}

function validate(userGuess) {
  if (isNaN(userGuess)) {
    console.log(`Please enter a valids number: ${userGuess}`);
  } else if (userGuess < 0) {
    console.log(`Please enter a number more than zero:${userGuess}`);
  }else if(userGuess > 100){
    console.log(`Please enter a number less than 100 :${userGuess}`);
  }
  else{
       prevGuess(userGuess);
  }
}

function prevGuess(userGuess) {
//    console.log(userGuess);
   guessed.innerHTML += `<span>${userGuess} </span>`;
   guessCount++;
   if(guessCount === 11){
             inputDisable();
              displayMessage(guessCount);
   }
   else if(userGuess === randNumber){
              winMessage(userGuess);
              inputDisable();
   }
   else if(userGuess > randNumber){
    lowOrHi.innerHTML =`<p>Your guess is too high.${userGuess}</p>`;
   }
   else if(userGuess < randNumber){
    lowOrHi.innerHTML =`<p>Your guess is too low.${userGuess}</p>`;
  
   }

}

function inputDisable() {
    inputField.setAttribute("disabled","");
    submitt.setAttribute("disabled","");
}

function displayMessage(guessCount){
    lowOrHi.innerHTML =`<p>Your guess is Over.${guessCount}</p>`;
}

function winMessage(guess){
    lowOrHi.innerHTML =`<p>Congratulation you got the correct number : ${guess}</p>`;
}
function endGame(){
    //
}


function startNewGame(){
    //
}