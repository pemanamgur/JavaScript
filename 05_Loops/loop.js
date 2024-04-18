// for (let i = 1; i <= 10; i++) {
//   if (i == 1) {
//     console.log("one");
//     // continue;
//     break;
//   }
//   console.log(i);
// }

// let i = 0;
// let myArray = ["pema", "tamang", "hero"];
// while (myArray.length > i) {
//   //3 <=10
//   console.log(myArray[i]);
//   i++;
// }

// let i = 3;
// let myArray = ["Pema", "Arjun", "Monkey"];
// do {
//   console.log(myArray[i]);
//   i++;
// } while (i < myArray.length);

// let score = 12;
// do {
//   console.log(score);
// } while (score > 13);

//for of loop

// let myarray = ["Pema", "Namgur", "Tamang", "Arjuna", "Krishna"];
// for (let item of myarray) {
//   console.log(item);
// }

// let greetings = "Hello World";
// for (let str of greetings) {
//   console.log(`Each characters is ${str}`);
// }

// myarray.forEach((element) => {
//   console.log(element);
// });

// let maap = new Map();
// console.log(maap);
// maap.set("name", "Pema");
// console.log(maap);
// console.log(maap.get("name"));
// console.log(maap.delete("name"));
// console.log(maap);

let maap = new Map();
// console.log(maap);
maap.set("name", "Pema");
maap.set("name2", "Pema2");
maap.set("name3", "Pema3");

// for (const key in maap) {
//   console.log(key);
// }

// for (const [key, value] of maap) {
//   console.log(`${key} : ${value}`);
// }

// for (const key of maap.values()) {
//   console.log(`${key} `);
// }
// for (const key of maap.keys()) {
//   console.log(`${key} `);
// }

// let person = {
//   name: "Pema",
//   age: 21,
//   faculty: "CsIT",
// };

// for (let key in person) {
//   console.log(`${key}`);
// }

// for (let key in person) {
//   console.log(`${person[key]}`);
// }

// let programming = ["C++", "Python", "JS"];
// for (const key in programming) {
//   console.log(programming[key]);
// }

let heros = ["Karan", "Arjun", "Krishna"];
// function greet(item) {
//   console.log(item);
// }
// heros.forEach(greet );
// heros.forEach((item, index, array) => {
//   console.log(`${item} is a god of index ${index} and all array are ${array}`);
// });

// let codings = [
//   {
//     langaugeName: "Python",
//     languageFile: ".py",
//   },
//   {
//     langaugeName: "JavaScript",
//     languageFile: ".js",
//   },
//   {
//     langaugeName: "PHP",
//     languageFile: ".php",
//   },
// ];

// codings.forEach((item) => {
//   console.log(
//     `Language name is ${item.langaugeName} and fileName is ${item.languageFile}`
//   );
// });

// const computer = ["Mac", "Dell", "HP", "VivoBook"];
// let result = computer.forEach((items) => {
//   // console.log(items);
//   // return items;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = numbers.filter((item) => item < 2);

// console.log(result);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = numbers.filter((item) => {
//   return item < 2;
// });
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = numbers.map((item) => {
//   return item + 2;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = [];
// numbers.forEach((item) => {
//   if (item > 2) {
//     newArray.push(item);
//   }
// });
// console.log(newArray);

// let books = [
//   {
//     bookname: "To Kill a Mockingbird",
//     publisher: "Harper Perennial Modern Classics",
//     genre: "Fiction",
//   },
//   {
//     bookname: "1984",
//     publisher: "Signet Classic",
//     genre: "Science Fiction",
//   },
//   {
//     bookname: "The Great Gatsby",
//     publisher: "Scribner",
//     genre: "Fiction",
//   },
//   {
//     bookname: "Pride and Prejudice",
//     publisher: "Penguin Classics",
//     genre: "Romance",
//   },
//   {
//     bookname: "Harry Potter and the Philosopher's Stone",
//     publisher: "Bloomsbury",
//     genre: "Fantasy",
//   },
//   {
//     bookname: "The Catcher in the Rye",
//     publisher: "Back Bay Books",
//     genre: "Fiction",
//   },
//   {
//     bookname: "The Hobbit",
//     publisher: "Houghton Mifflin Harcourt",
//     genre: "Fantasy",
//   },
// ];

// let genreFic = books.filter((item) => {
//   return item.genre === "Fiction";
// });
// console.log(genreFic);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let chaining = numbers
//   .map((num) => num * 10)
//   .map((num) => num + 10)
//   .filter((num) => num > 10);

// console.log(chaining);

// let nums = [1, 2, 3, 4];
// let sumwithInitial = nums.reduce((acc, cur) => {
//   console.log(`acc : ${acc} and currentValue : ${cur}`);
//   return acc + cur;
// }, 0);
// console.log(sumwithInitial);

const shoppingCard = [
  {
    itemName: "JSCourse",
    Price: 299,
  },
  {
    itemName: "PythonCourse",
    Price: 999,
  },
  {
    itemName: "NativeCourse",
    Price: 599,
  },
  {
    itemName: "DataCourse",
    Price: 1299,
  },
];

let totalMoney = shoppingCard.reduce((acc, curr) => acc + curr.Price, 0);
console.log(totalMoney);
