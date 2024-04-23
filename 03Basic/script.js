//Object Literals:

let object = {
  name: "Pema",
  age: 21,
  greeting: function () {
    console.log(`My name is ${this.name}`);
    // console.log(this);
  },
};

// console.log(object.name);
// console.log(object.greeting());
// console.log(this);
//if it is in the form of key value pairs then it is said to be object literals

function userOne(username, LoginedCount, age) {
  this.username = username;
  this.LoginedCount = LoginedCount;
  this.age = age;
  this.greeting = function () {
    console.log(`Welcome ${this.username} `);
  };
  return this;
}

let user1 = new userOne("Pema", 12, 21);
let user2 = new userOne("PemaT", 11, 22);
// console.log(user1.greeting());
// console.log(user1);
console.log(user1.constructor);
// console.log(user2.greeting());
// console.log(user2);
