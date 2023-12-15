

const studentInfo = [ "Pema","Nissan", "Rupjung" , "Khabindra"];
const teacherInfo = ["Omkar","Jeet Naryan","Sukraj"];


// const checkArray = console.log(Array.isArray(2));
// const checkArray2 = console.log(Array.isArray("Pema"));
// const checkArray3 = console.log(Array.isArray([1,2,"Pema","Developer"]));


// studentInfo.push(teacherInfo);
// console.log(studentInfo)
//    To access array inside array do : 
//   console.log(studentInfo[4][0])

// studentInfo.push(teacherInfo[0]);
// console.log(studentInfo);


// const allDep = studentInfo.concat(teacherInfo);
// console.log(allDep)


const allNewDep = [...studentInfo,...teacherInfo];
// console.log(allNewDep)


const anotherArray = [1,2,3,[4,5,6,[7,6,5,3,8,9]]];
// console.log(anotherArray.flat(Infinity)); //depth chai infinity deyo


// console.log(Array.isArray("Pema"));
// console.log(Array.from("Pema"));
// console.log(Array.from({
//     name : "Pema",
//     age : 21,
//     faculty : "BSCSIT",
// }));
//Interesting 


let score1 = 10;
let score2 = 10;
let score3 = 10;
// console.log(Array.of(score1,score2,score3))

