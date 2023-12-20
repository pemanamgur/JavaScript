

const myArray = ["Ram Sharan","Dorjee","Rajan","Sajan","Norkey","Karma"];

const collects = myArray.forEach((items)=>{
    // console.log(items);       //this is printed;
    // return items;                 //the value is not returned lik this;       undefined aucha
})

// console.log(collects);


//we need to write more code:
const myN = [1,2,3,4,5,6];
const nArr = [];
myN.forEach((items)=>{
      if(items < 4){
        // console.log(items);                  //value print
        // nArr.push(items);             
      }
})
// console.log(nArr);                         //value inside array
  


//To remove this defects we use filter , map and reduce:   => but return a array of values

const newNum = [1,2,3,4,5,6,7];
// const coll = newNum.filter((num)=> num >4);         //yesma no return because no scope
// console.log(coll);

// const newArr = newNum.filter((items)=>{
//             // items < 5 ;                              //yesma return garnu parcha because of  scope;
//             return items < 5 ;                          
// });
// console.log(newArr);



// const newArr = newNum.map((items)=>{
//            return items * 2 ;
// });
// console.log(newArr);

// const newArr = newNum.map((num)=> num + 5);
// console.log(newArr);



// const newArr = newNum.reduce((items,items2)=>{
//            return items * items2 ;
// });
// console.log(newArr);









//
const books =[
    {
        title : "Rich Dad Poor Dad",
        writer : "Robert T. Kiyosaki",
        published : 1997,
        genre : "finance"
    },
    {
        title : "Think and Grow Rich",
        writer : "Napolean Hill",
        published : 1937,
        genre : "Personal development"
    },
    {
        title : "The 7 Habits of Highly Effective People",
        writer : "Stephen R. Covey",
        published : 1989,
        genre : "Business"
    },
    {
        title : "How to Win Friends and Influence People",
        writer : "Dale Carnegie",
        published : 1936,
        genre : "Communication"
    },
];

//  let coll = books.filter((items)=> items.title === "Think and Grow Rich");
let call = books.filter((items)=>{
          return items.published === 1936;             //scope so return is required
})
// console.log(coll);
// console.log(call);






//Chaining

const myNum = [1,2,3,4,5,6,8];

// const newN = myNum.map((num)=>num * 10) 
//                   .map((num)=>num +1)
//                   .filter((num)=> num <20);
// console.log(newN);                 