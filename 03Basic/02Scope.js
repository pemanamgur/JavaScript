
// let name1 = "Pema";
// const name2 = "Rups";
// var name3 = "Nissan";

var name3 = "My value is overriden by var inside scope";
let name1 = "Im global";  


if(true){
let name1 = "Pema";             //scope level
// const name2 = "Rups";            //scope level
var name3 = "Nissan";          //function level
}

// console.log(name1);
// console.log(name2);
// console.log(name3);               //ANs will be nissan because name3 is declared with var;


function scope(){
    if(true){

        let a =5 ;
        var b =5;
    }
//     console.log(a);
// console.log(b);
}
scope();
// console.log(a);
// console.log(b);   //you can't access like this 


//The scope in browser console and terminal is different (Interview);