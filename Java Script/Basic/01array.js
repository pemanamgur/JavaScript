

let arr = [1,2,3,4,5];
let superHero = ["Thor","Kobe Bryant","Lebron James"];
// console.log(arr[0]);
// console.log(typeof arr);


//****** Interview about****/

//Array copy operation  they are : shallow-copy original array changes(reference (heap)) and deep-copy   original array dont change((not-reference(stack)))


const myArray = new Array(1,2,3,4,"Pema" ,5 , "Pema");
// console.log(myArray[0]);
// console.log(myArray.push("Pema"));
// // console.log(myArray.pop("Pema"));


// // console.log(myArray.indexOf(2));
//if the idex is given out of range then its value will be -1 which mean there is no value like that in array


// console.log(myArray.push("nissan"));
// // console.log(myArray.pop());
// console.log(myArray.unshift("2"));
// console.log(myArray.unshift(7));
// console.log(myArray.shift());
// console.log(myArray)


// console.log(myArray.includes("Pema")? "Yes there is 4 in array" : "No there is no 4 in array.");

// console.log(myArray.reverse())

// console.log(myArray.join(" is the index "));

// console.log(myArray.reverse());

// console.log(myArray.toString());



//Slice and Splice

const arr2 = [1,2,3,4,5];
const arr3 = arr2.slice(2);
console.log(arr2);
// console.log(arr3);


const arr4 = [1,2,3,4,5];
const arr5 = arr4.splice(3,3,4,5,6);
console.log(arr4);
// console.log(arr5);


const subject = ["Computer","Math","Science"];

// console.log(subject.slice(0,1));
// subject.slice(0,1);s
// console.log(subject);



subject.splice(1,0,"added");
// console.log(subject);


