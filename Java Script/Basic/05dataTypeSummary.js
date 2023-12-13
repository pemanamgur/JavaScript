//Data type are classified into two types primitive and non-primitive according to memory stored and accessment
//#Primitive dataType : String , Number ,Boolean ,null ,undefined ,Symbol (advanced unique banauna) , BigInt

//#Reference Type (Non-preemptive) : array , object ,function       =>reference to memory

//Whether JS is dynamic or static?
//->Js is dynamic because the type of variable is determined at run time and changee variable during execution time For.EG
// let  name = "Pema";
// name = 1;



let score = 100;
let scoredValue = 100.3;

let isLogged = false;
let outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');//to make unique

// console.log(id === anotherId);

let a = '2dg';
console.log(Number(a));