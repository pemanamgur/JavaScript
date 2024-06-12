// document.title = "Pema";

// function handleClick() {
//   console.log("This is the outer level");
//   console.group();
//   console.log("Level 2");
//   console.log("Level 2");
//   console.log("Level 2");
//   console.group();
//   console.log("Level 3");
//   console.warn("More of level 3");
//   console.groupEnd();
//   console.log("Back to level 2");
//   console.groupEnd();
//   console.log("Back to the outer level");
// }

// let name;
// console.log(name + 10); // NaN

// <!-- Js can be  displayed in html : inline , internal , external -->
// <!-- why before body : its depend on useCase-->
// <!-- document cant be accessed in node -->
// <!-- data types in js
//   primitive : number , string , bool
//   non-primitive : array , object and function
//  -->

//  <!-- type of null : object -->
//  <!-- undefined + 10 => Nan -->

//  <!-- variable is used as a utility -->

// Variabl
// console.log(b);
// let a = "Pema";
// a = "Pema1";
// var b = "Pema";
// const c = "ram2";

// three types to declare string
// let name1 = "pema";
// name1 = "Pema";
// name1 = `${name1}`;

// console.log(20 - "20"); //0

// Number
// let num1 = 20;
// let num3 = 20.02;
// console.log(num3.toPrecision(3));
// console.log(num1 + num3);

//boolean
// let isMale = true;
// let isHoliday = false;

// 11th June(Numbers , function)
// name and anynomous funtion

function getDay(dt) {
  return dt;
}

// const date = getDay(Date.now());
// console.log(date);

function sum(n1, n2 = 3) {
  return n1 + n2;
}

let result = sum(1);
// console.log(result);

function spreadd(first, second, ...num1) {
  //   console.log(first, second, num1);
  return num1;
}

// let res2 = spreadd(1, 2, 3, 4);
// console.log(res2);

// function destructureExample([first, second, ...rest]) {
//   console.log("First:", first);
//   console.log("Second:", second);
//   console.log("Rest:", rest);
//   console.log([first, second, rest]);
// }

// destructureExample([1, 2, 3, 4, 5]);

// let obj = {
//   name: "Pema",
//   age: 21,
//   email: "pema@gmail.com",
// };

// const { name, ...rest } = obj;
// console.log(name);
// console.log(rest);

// const numbers = [1, 2, 3, 4, 5];
// let numArr = [0, ...numbers, 6];
// console.log(...numbers);

// console.log(numArr);

// function checkOddAndEven(num1) {
//   if (num1 % 2 === 0) {
//     console.log("It is even number", num1);
//   } else {
//     console.log("Its odd", num1);
//   }
// }

// checkOddAndEven(21);
// checkOddAndEven(3);
