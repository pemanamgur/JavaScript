function setUsername(username) {
  this.username = username;
  console.log("called");
}

function userDetails(username, age, email) {
  setUsername.call(this, username);
  this.age = age;
  this.email = email;
}

let user = new userDetails("Pema", 21, "pema@gmail.com");
console.log(user);
