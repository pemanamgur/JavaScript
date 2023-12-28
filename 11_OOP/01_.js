// const user ={
//     username : "Pema",
//     loggedIn : true,
//     signedIn : true,
//     details : function (){
//         // console.log(this.username);
//         // console.log(this);
//     }
// }
// // console.log(user);
// // console.log(user.details());  //to create 2nd user we need to make 2nd obj which is not the good option


function userInfo(username, loggedIn , signedIn){
         this.username = username;
         this.loggedIn = loggedIn;
         this.signedIn =signedIn ;

         this.greeting = function (){
            console.log(`Welcome , ${this.username}`)
         }
         return this;
}

// const users =  userInfo("Pema","yes","no");
// const users2 =  userInfo("Ronaldo","yes","no");      //this code overRide the user1 
// console.log(users);



const users =  new userInfo("Pema","yes","no");
const users2 = new userInfo("Ronaldo","yes","no");      //new le jaile unique instance dincha 
// console.log(users);
// console.log(users2);
// console.log(users.greeting());
// console.log(users2.greeting());


//Instance of:

