//if

let isUserLoggedIn = true;
if(isUserLoggedIn){
    // console.log("user is loggedIn.");
}

if(2 == '2'){
    // console.log("user2 is loggedIn.");
}

if(3 === '2'){
    // console.log("user3 is loggedIn.");
}

if(3 !== '2'){
    // console.log("user4 is loggedIn.");
}


 let isTemperature = 6;
    
if(isTemperature === 6){
    // console.log("The temperature is equal to 6");   //true ko lagi
}    
else{
    // console.log("The temperature is not equal to 6"); //false ko lagi
}
// console.log("This is executed...");


let height = 5.9;

if(height > 4.5){
    const result = "tall";       //if we use var then can be accessed globally.
    // console.log(`You can be called as ${result} boy.`);
}
// console.log(`You can be called as ${result} boy.`);     //result is not defined since const is local 



//Short hand if condition

const balance = 100;

// if(balance > 0.22) console.log(`You got ${balance} balance so dont need to recharge`);


let accountID = 4.1;

if(accountID  < 4){
    // console.log(`The account id is less then 4 .`);
}
else if(accountID < 6){
    // console.log(`The account is is less than 6 . `);
}
else{
    // console.log(`The account id is 7`);
}


let userIn = true;
let debitCard = true;
let name = "Pema";
let emailLogged = true;
let fbLogged = true;
// if(userIn && debitCard) console.log(`${name} , has loggedIn.`);
// if(emailLogged || fbLogged) console.log(`${name} , can loggedIn.`);