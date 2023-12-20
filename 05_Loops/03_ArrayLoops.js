//["","",""];
//[{},{},{}];

//For of 

const myArray = [ "Pema","Kevin Hart","Tom Curiz" ,"Zackie" , "Kobe"];





// for(let items of myArray){
//     console.log(items);          //prints all value
// }

// for(let items in myArray){
//     console.log(items);          //prints all index 
// }


//myArray.forEach(function name(){})      //this is callback means to call a function
myArray.forEach(function (items){              //there is no name ;
    // console.log(items);                           
    // return items;                             //forEach ko lagi return na gara;
})                                 

                                          
// myArray.forEach(greet =()=>{});         //using arrow  function
// myArray.forEach((items)=>{          //using callback function
//     console.log(items);           //prints all value
// })



// const greeting = "Hello World";
// for (const greet of greeting) {
//     console.log(greet)
// }


//Maps:

const map = new Map();
map.set('1','pema');
map.set('2','pemass');
map.set('3','pemas');
map.set('1','Nissan');                     //setting same key make the update of data i.e pema => Nissan
// console.log(map.get('2'));                  //get is used to get the value of key 
// console.log(map.get('1'));
// console.log(map);

// for (const mp of map) {
//     console.log(mp);                        //return array with key and value
// }

// for (const [key,value] of map) {
//     console.log(key ,"-:" , value);                        //to print value we need to destructure in [] bracket
// }

// for (const key in map) {
//       console.log(key);               //this map can't be iterated using for in loop;     
//     }



//for of don't work for object:
const obj = {
    name : "Pema",
    age : 30,
    faculty : "CSIT",
}

// for (const key in obj) {
//     console.log(`key : ${key} and value : ${obj[key]}`);                //can access
//     // console.log(obj.key) ;                                    //can't access value like this
// }

// for (const key of obj) {
//     console.log(obj[key]);
// }



for (const key in myArray) {
    // console.log(key);                                      //gives array key 
    // console.log(myArray[key]);                             //gives array value
}





// using function reference as callback

function printMe(items){
            console.log(items);
}

// myArray.forEach(printMe);                //function lai call nagari , reference dinu


// myArray.forEach((values , index , arrayList)=>{
//     console.log(values,index,arrayList);
// })



const coding = [
    {
        languageName : "JavaScript",
        fileName : "js"
    },
    {
        languageName : "Java",
        fileName : "java"
    },
    {
        languageName : "Python",
        fileName : "py"
    },
];

coding.forEach((values)=>{
    // console.log(`I love ${values.languageName} and its file extension is ${values.fileName}`);
});



const nums =  [1,2,3,4];
// const myTotal = nums.reduce((prev , currernt)=> prev + currernt,0);    //0 is a initial value
// console.log(myTotal);

// const myTotal = nums.reduce((acc,curVal)=>{
//     console.log(`accumulator : ${acc} and currentVal : ${curVal}`);
//         return acc + curVal;
// },1)                                                    //this is the initial value.
// console.log(myTotal);




const courses = [
    {
       coursename : "Full Stack Development",
       price : 1000
    },
    {
       coursename : "Data Science",
       price : 800
    },
    {
       coursename : "Python",
       price : 500
    },
    {
       coursename : "AI",
       price : 1000
    },
];

// const mytotal = courses.reduce((acc , curVal)=> acc + curVal.price,0 );
// console.log(mytotal)