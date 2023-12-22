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
