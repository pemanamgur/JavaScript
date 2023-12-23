# Project related to DOM

## project link

[click]('https://www.google.com')

# Solution code:

## project 1

```
 

const body = document.querySelector("body");
const colors = document.querySelectorAll('.container');

colors.forEach(function(button){
   button.addEventListener('click',function(e){
    //    console.log(e);    
    // console.log(e.target);    
        //  console.log(e.target.id)
        //  console.log(e.target.value);


 const bg_Color = e.target.id;
    // console.log(bg_Color);

    // switch(bg_Color){
    //     case 'yellow' :
    //                  body.style.backgroundColor = "yellow";
    //                  break;
    //     case 'gray' :
    //                  body.style.backgroundColor = "gray";
    //                  break;
    //     case 'green' :
    //                  body.style.backgroundColor = "green";
    //                  break;
    //     case 'red' :
    //                  body.style.backgroundColor = "red";
    //                  break;
    //     default:
    //                 alert("Youe button event is not working");
    //                 break;          
    // }










        if(e.target.id == 'yellow'){
            body.style.backgroundColor = "yellow";
            body.style.color = "black";

        }
        if(e.target.id == 'gray'){
            body.style.backgroundColor = "gray";
            body.style.color = "black";
        }
        if(e.target.id == 'green'){
            body.style.backgroundColor = "green";
            body.style.color = "white";
        }
        if(e.target.id == 'red'){
            body.style.backgroundColor = "red";
            body.style.color = "black";
        }
   })
})
```

## project 2

```
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log(e.target);
  const heightValue = parseInt(document.querySelector("#height").value);
  const weightValue = parseInt(document.querySelector("#weight").value);
  const underWeight = document.querySelector("#underWeight");
  const NormalRange = document.querySelector("#NormalRange");
  const OverWeight = document.querySelector("#OverWeight");
  const results = document.querySelector("#results");

  // switch (heightValue) {
  //   case 120:
  //     console.log("You got the number");
  //     break;
  //   case isNaN(heightValue):
  //     console.log("you are height");
  //     break;
  //   case "<0":
  //     console.log("You entered negative number");
  //     break;
  //   default:
  //     console.log("Please enter a valid number.");
  // }

  // console.log(heightValue,weightValue)
  // const results = document.querySelector("#results");
  // console.log(results);

  if (heightValue === "" || isNaN(heightValue) || heightValue < 0) {
    results.innerHTML = `<p>Please enter a valid number : ${heightValue}</p>`;
  } else if (weightValue === "" || isNaN(weightValue) || weightValue < 0) {
    results.innerHTML = `<p>Please enter a valid number : ${weightValue}</p>`;
  } else {
    const BmiCalc = (
      weightValue /
      ((heightValue * heightValue) / 10000)
    ).toFixed(2);

    // console.log(BmiCalc);
    results.innerHTML = `<span>${BmiCalc}</span>`;

    if (BmiCalc < 18.6) {
      underWeight.textContent = `Under Weight = Less than ${BmiCalc}`;
      NormalRange.textContent = "";
      OverWeight.textContent = "";
    } else if (BmiCalc >= 18.6 && BmiCalc <= 24.9) {
        NormalRange.textContent = `Normal Range =  ${BmiCalc}`;
        OverWeight.textContent = "";
        underWeight.textContent = "";

    } else if (BmiCalc > 24.9) {
        OverWeight.textContent = `Over Weight = Greater than ${BmiCalc}`;
        underWeight.textContent = "";
        NormalRange.textContent = "";

    }
  }
});

```


## project 3

```



const clock = document.getElementById('clock');
setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);


```


## project 3

```Javascript

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

```