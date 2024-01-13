

// const user = {
//     username : "Pema",
//     loginCount : 8,
//     signedIn : true,
//     userDetail : function(){
//         // console.log(this)
//         // console.log(`My name is Nabin`);
//         // console.log(`Username : ${this.username}`)
//         console.log(this);
//     }
// }

// console.log(user.username);
// // console.log(user.userDetail());
// console.log(this);


function MyInfo(username,userAge,userEmail){
     this.username = username;
     this.userAge = userAge;
     this.userEmail = userEmail;
     this.greeting = function(){
        console.log(`Hello world , My name is ${this.username}`);
     }

     return this;
}

const user1 = new MyInfo("Pema" , 22 , 'pemanamgurtamang7@gmail.com');
const user2 = new MyInfo("Tema" , 22 , 'pemanamgurtamang7@gmail.com');
// console.log(user1);
// console.log(user1.greeting());
// console.log(user1.constructor);
// console.log(user2.constructor);
// console.log(user2.greeting());


// console.log(user1 instanceof MyInfo);
// console.log(user2 instanceof MyInfo);
// console.log(Pema instanceof MyInfo);