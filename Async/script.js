// setTimeout(function () {
//   console.log("Pema Namgur Tamang");
// }, 2000);

// function changeContent() {
//   let content = document.querySelector("h1");
//   //   console.log(content);
//   content.textContent = `Pema gonna be a great developer`;
// }

// let refChange = setTimeout(changeContent, 3000);

// let stop = document.querySelector("#stop");
// stop.addEventListener("click", function () {
//   clearTimeout(refChange);
//   console.log("stopped");
// });

// let refInt = setInterval(setName, 2000);
// function setName() {
//   console.log("Pema Namgur Tamang", Date.now());
// }

let setted;
document.querySelector("#start").addEventListener("click", setName);
document.querySelector("#stop").addEventListener("click", setNo);

function setName() {
  if (!setted) {
    console.log("Pema ", Date.now());
    setted = setInterval(() => {
      console.log("Pema ", Date.now());
    }, 1000);
  }
}

function setNo() {
  clearInterval(setted);
  setted = null;
}
