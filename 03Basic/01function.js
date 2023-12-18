


function myName(){
    console.log("P");
    console.log("E");
    console.log("M");
    console.log("A");    
}
// myName;        //if no paraenthesis then it is only an reference of a function.   
// myName();        //if parenthesis then it execute the function.


function addTwoNum2(x,y){   //this part is parameter and calling fun is passed with argument
    // return hello;  //function ma return pachi ko kunai code chaldaina
  console.log( x+y) ;
}
// let res = addTwoNum2(2,3);
// console.log(res);




function addTwoNum(x,y){   //this part is parameter and calling fun is passed with argument
  return x+y;
}

// let sum = addTwoNum(2,'3'); // when number and string is passed it concat 
// let sum = addTwoNum(2,null); // null is counted as zero
// console.log(sum);



// function loggedInUserMsg(username = "Pema default"){
//     return `${username} is loggedIn`
// } 
// console.log(loggedInUserMsg());

function loggedInUserMsg(username){
    if(username === undefined){        //!username
        console.log("Please enter your name.");
        return; //if return is written no other code is seen after that even in fuunction
    }
    return `${username} is loggedIn`;
} 
// console.log(loggedInUserMsg("Pema"));
// console.log(loggedInUserMsg());          //undefined huncha



function display(...num1){
  return num1;
}
// console.log(display(4)); 
// console.log(display(4,5,6));//for more than two value you can spred like this.


function display2(val1, val2 ,...num1){
  return num1;
}
// console.log(display2(4,5,4,3,2)); // left data haru array ma aucha;


// const obj = {
//   username : "Pema",
//   address : "Chabhil"
// };


function userInfo(info){
   console.log(`The name of user is ${info.username} and her address is from ${info.address}`);
}
// userInfo(obj);
// userInfo({ username : "Pema", address : "Boudha",}); //we can also pass object as argument


function handleArray(arr){
  console.log(`The name of ${arr[0]} friends are ${arr[1]} , ${arr[2]} and ${arr[3]}`);
}
// handleArray(["Pema","Nissan","Rups","Kabindra"]); //passing array as an argument;

