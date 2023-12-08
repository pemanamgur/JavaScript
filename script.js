


// let select = document.querySelector("select");
// let h1 = document.querySelector("h1");
// let ul = document.querySelector("ul");

// select.addEventListener("change",()=>{
//   let choice = select.value;

//   let days = 31;
//   if(choice === "Feburary"){
//     days = 28;
//   }
//   else if(choice === "April" || choice === "June" || choice === "September" || choice === "November"  ){
//     days = 30;
//   }
//   calendar(days,choice);
// });

// function calendar(days,choice){
//   h1.textContent = choice;
//   ul.innerHTML ="";
//   for(let i = 1 ; i <= days ;i++){
//   let listItem = document.createElement("li");
//   listItem.textContent = i;
//   ul.appendChild(listItem);
   
//   }
// }

// calendar(31,"January");


// let userChoice = prompt("Enter either S , W and G.");
// let CPUR = Math.floor(Math.random()*3);
// let computerChoice = ["S","W","G"] [CPUR];

// function check(user,cpu){
//      if(user === cpu){
//       return "Tie";
//      }
//      else if(user ==="S" && cpu === "W"){
//       return "user";
//      }
//      else if(user === "S" && cpu === "G"){
//       return "cpu";
//      }
//      else if(user === "W" && cpu === "S"){
//       return "cpu";
//      }
//      else if(user === "W" && cpu === "G"){
//       return "user";
//      }
//      else if(user ==="G" && cpu === "S"){
//       return "user";
//      }
//      else if(user === "G" && cpu ==="W"){
//       return "cpu";
//      }
//      else{
//       alert("Enter either S, G and W");
//      }
// }

// let result = check(userChoice,computerChoice);
// let para = document.createElement("p");
// para.innerHTML =`The winner of the game is ${result}.<br>
//                    Cpu : ${computerChoice}<br>
//                    User : ${userChoice}
// `;
// document.body.appendChild(para);


// let dogs = ["Hussky","bullDog","bhote"];

// let sentence = "Some newArray[0] of my lovely dog species are";

// for(let i = 0 ; i <dogs.length ; i++){
//     if(i === dogs.length -1){

//         sentence += `and ${dogs[i]}.`;
//     }
//     else{
//         sentence += `${dogs[i]},`;
//     }
// }
// let para = document.createElement("p");
// para.textContent = sentence;
// document.body.appendChild(para);

// let para = document.querySelector("p");
// let button = document.querySelector("button");
// let input = document.querySelector("input");

// let contacts =[
//     "Pema:7777",
//     "Samdane:1010",
//     "Yindung:9999",
//     "YangDon:1111",
//     "Thosal:4444",
// ];

// button.addEventListener("click",search);

// function search(){

//     let searchName = input.value.toLowerCase();
//     para.textContent = "";
//     input.value ="";
//     input.focus();
//     for(let contact of contacts){
//         let newArray = contact.split(":");
//         if(searchName === newArray[0].toLowerCase()){
//         para.textContent = `Mr.${newArray[0]} contact number is ${newArray[1]}`;
//         break;
//         }
//         else{
//             para.textContent = "Result not found.";
//         }
//     }
// }

// let total= document.querySelector("#total");
// let grade= document.querySelector("#grade");
// let result= document.querySelector("#result");
// let average= document.querySelector("#average");
// let para  = document.querySelector("p");

// total.addEventListener("click",sum);

// function sum(){
//     let total;
//     let numx = parseInt(document.querySelector("#num1").value || 0);
//     let numy = parseInt(document.querySelector("#num2").value || 0);
//     let numz = parseInt(document.querySelector("#num3").value || 0);
//     let numzz = parseInt(document.querySelector("#num4").value || 0);

//     let a = numx;
//     let b = numy;
//     let c = numz;
//     let d = numzz;

//     total = a+b+c+d;
//     para.textContent = `The total is ${total}`;
//     return total;
// }

// average.addEventListener("click",Avg);
// function Avg(){
//    let tot =  sum();
//     let avg =tot / 4;
   
//     para.textContent = `The average is ${avg}`;
//     return avg;
// }

// result.addEventListener("click",Res);

// function Res(){
//     let Aver = Avg();
//     if(Aver >=0 && Aver <=39){
//         para.textContent = "Your result is fail,try again.";
//     }
//     else{
//         para.textContent ="You are pass , congratulations";
//     }
// }

// grade.addEventListener("click",Grad);

// function Grad(){
//     let avg = Avg();
//     if(avg >=0 && avg <=40){
//         para.textContent ="You got D grade.";
//     }
//     else if(avg > 60 && avg < 80){
//         para.textContent ="YOu got A grade";
//     }
//     else{
//         para.textContent = "You got A + grade";
//     }
// }


   
// <label for="squareRoot">Enter a number:</label>
// <input id="squareRoot" type="number">
// <button>click to generate the sequence of quareRoot</button>
// <p></p>

// let para = document.querySelector("p");
// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click",sqrGenerate);

// function sqrGenerate(){
//     para.textContent = "Output :";
//     let value = input.value;
//     input.focus();
//     for(let i=1 ; i<=value ; i++){
//         let sqrt = Math.sqrt(i);
//         if(Math.floor(sqrt) !== sqrt){
//             continue;
//         }
//         else{
//             para.textContent += `${i}`;
//         }
//     }
// }


// let dogs = ["Jenny","Ranju","Bandi"];

// let favDogs = "My best dogs are";
// let i= 0;
// while(i< dogs.length){
//     if(i === dogs.length -1){
//         favDogs += `and ${dogs[i]}.`;  
        
//     }else{
//         favDogs += `${dogs[i]},`;  
//     }
        
//     i++;

// }
// console.log(favDogs);

// let family = ["Pema","Yangdon","Thosal","Samdane","Yindung"];

// let members ="The members of my family are";
// let i = 0;
// do{
//    if( i === family.length -1){
//     members += `and ${family[i]}.`;
//    }
//    else{
//     members += `${family[i]},`;
//    }

// i++;
// }while(i<family.length);
// console.log(members);


// const output = document.querySelector(".result");
// output.innerHTML ="";

// let i =10;
// while(i>=0){
//     const para = document.createElement("p");
//     if(i === 10){
//         para.textContent = `Countdown ${i}`;
//     }
//     else if(i === 0){
//         para.textContent = 'Blast Off!';
//     }
//     else{
//         para.textContent = i;
//     }

//     output.appendChild(para);
//     i--;
// }

// const list = document.querySelector(".listItem");

// let myArray = [ "Pema","Yindung","Tshering Yangdon","Thosal","Samdane"];

// for(let item of myArray){
//     let li = document.createElement("li");
//     li.textContent = item;
//     list.appendChild(li);
// }

// const myArray = [{name :"Pema"},
// {para : "He is one of the outstanding student.He works hard and optimistic about his future.May god bless him."},
// {phonebook : "1234"}];
// let para = document.querySelector("p");
// const container = document.querySelector(".container");
// let i = 0;
// while(i<myArray.length){
 
//    if(myArray[i]["name"] == "Pema"){
//     para.textContent = `${myArray[i]["name"]} : ${myArray[i]["phonebook"]}`;
//    }
//    else{
//     para.textContent = "NO result";
//    }
//     i++;
// }


// Initialize variables
// let i = 500;
// let para = document.getElementById('yourParagraphId'); // Replace 'yourParagraphId' with the actual ID of your paragraph element

// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) 
//     return false;
//     for (let j = 2; j <= Math.sqrt(num); j++) {
//         if (num % j === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Loop through numbers from 500 to 2
// while (i >= 2) {
//     // Check if the current number is prime
//     if (isPrime(i)) {
//         // If prime, add it to the paragraph's textContent with a separator
//         para.textContent += i + ' | '; // You can choose any separator, for example, '|'
//     }

//     // Move to the next iteration
//     i--;
// }

// // Remove the trailing separator, if any
// para.textContent = para.textContent.slice(0, -2);



// let i = 500;
// let para = document.getElementById('yourParagraphId'); // Replace 'yourParagraphId' with the actual ID of your paragraph element

// function isPrime(num){
//     if(num <=1){
//         return false;
//     }
//     for(let j=2 ; j<=Math.sqrt(num) ; j++){
//         if(num % j == 0){
//             return false;
//         }
//     }
//     return true;
// }

// while(i>=2){
//     if(isPrime(i)){
//         para.textContent += `${i} |`;
//     }
//     i--;
// };
// para.textContent = para.textContent.slice(0,-2);


// const sentence = "My ,name is, Pema, Namgur, Tamang.";
// const replaced = sentence.replace("Pema","Thosal");
// console.log(sentence);//builtin function
// console.log(replaced);//builtin function

// const myArray =["Pema","Thsering Yanngdon","Yindung","Samdane","Thosal"];
// let splited = sentence.split(",");
// // let joined = myArray.join(" ");
// // console.log(joined);
// console.log(splited);

// print();
// function print(){
//     console.log("Hello World.");
// }

// function myName(name = "Pema"){
//     result = `My name is ${name}`;
//     return result;
// }
// console.log(myName());
// console.log(myName("Detuk"));

//Anonymous function : dont have name means confusion
// (function(){
//     alert("Hello World.");
// })

// const input = document.querySelector("input");
// const para = document.querySelector("p");
// para.textContent = "" ;
// input.addEventListener("keydown",log);

// function log(e){
//     para.textContent += `${e.code}`;
// }

// let myArray = [1,2,3];
// let doubled = myArray.map((value)=>{
//     return value*2;
// });
// console.log(doubled);

// let filtered = myArray.filter((value)=>{
//     return value%2 ==0 ;
// })
// console.log(filtered);


// const input = document.querySelector("#textBox");
// const output = document.querySelector(".output");

// input.addEventListener("keydown",(event)=>{
//     output.textContent = `The key is ${event.key}`;
//     input.value ="";
// });


// const name ="Pema";

// function para(){
//     console.log(`Welcome Mr.${name}`);
// }
// para();



// const x = 1;

// function a() {
//   const y = 2;
//   output(z);
// }

// function b() {
//   const z = 3;
//   output(y);
// }

// function output(value) {
//   const para = document.createElement('p');
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//   displayMessage("Woo this is the new Message.");
// });
// function displayMessage(msgText,msgType){
//   const body = document.body;
//   const panel = document.createElement("div");
//   panel.setAttribute("class","msgBox");
//   body.appendChild(panel);

//   const textMessage = document.createElement("p");
//   textMessage.textContent = msgText;
//   panel.appendChild(textMessage);

//   const closeBtn = document.createElement("button");
//   closeBtn.textContent = "X";
//   panel.appendChild(closeBtn);

//   closeBtn.addEventListener("click",()=>panel.parentNode.removeChild(panel));

//   if(msgType === warning){
//     msgText.style.backgroundImage =url(warning.png);
//     panel.style.backgroundColor = "red";
//   }
//   else if(msgType === chat){
//     msgText.style.backgroundImage =url();
//     panel.style.backgroundColor = "aqua";
//   }
//   else{
//     msgText.style.paddingLeft = "20px";
//   }
// }
// displayMessage("Your inbox  is almost full delete some ","warning");
// // displayMessage("Hello how are you ","chat");

// let para = document.querySelector("p");
// let input = document.querySelector(".numberInput");

// function square(num){
//   return num*num;
// }

// function cube(num){
//   return num*num*num;
// }

// function factorial(num){
//   if(num < 0 ) return undefined;
//   if(num === 0) return 1;
//   let x = num-1;
//   while(x > 1){
//     num *= x;
//     x--;
//   }
// return num;
// }


// input.addEventListener("change",()=>{
//   const num = parseFloat(input.value);
//   if(isNaN(num)){
//     para.textContent ="Enter a valid number.";
//   }
//   else{
//     para.textContent = `the square of ${num} is ${square(num)}`;
//     para.textContent += `the cube of ${num} is ${cube(num)}`;
//     para.textContent += `the factorial of ${num} is ${factorial(num)}`;
//   }
// })


// function random(num){
//   return Math.floor(Math.random()*num +1);
// }

// const btn = document.querySelector("button");
// // btn.addEventListener("click",()=>{
// //   let rand = `rgb(${random(255)},${random(255)},${random(255)})`;
// //   document.body.style.backgroundColor = rand;
// // })

// const controller = new AbortController();

// btn.addEventListener("click",
//   () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   },
//   { signal: controller.signal } // pass an AbortSignal to this handler
// );
// controller.abort();

// let btn = document.querySelector("button");

// btn.addEventListener("click",bgChange);

// function bgChange(e){
//   console.log(e);
// }

// const output = document.querySelector("#output");
// const input = document.querySelector("#textBox");

// input.addEventListener("keydown",(e)=>{
//   output.textContent = `You pressed "${e.key}"`;
// })

// let form = document.querySelector("form");
// let fname = document.getElementById("fname");
// let lname= document.getElementById("lname");
// let para = document.querySelector("p");

// form.addEventListener("submit",(e)=>{
//     if(fname.value === "" || lname.value === ""){
//       e.preventDefault();
//       para.textContent ="You need to enter both...";
//     }
// })

// const container = document.getElementById("container");
// const output = document.getElementById("output");
// const btn = document.querySelector("button");

// function handleClick(e){
//   output.textContent += `You clicked in ${e.currentTarget.tagName} element\n`;
// }
// document.body.addEventListener("click",handleClick);
// container.addEventListener("click",handleClick);
// btn.addEventListener("click",handleClick);

// let btn = document.querySelector("button");
// let video = document.querySelector("video");
// let box = document.querySelector("div");



// btn.addEventListener("click",()=>{box.classList.remove("hidden")});
// video.addEventListener("click",()=>{video.play()});
// box.addEventListener("click",()=>{box.classList.add("hidden")});

// const container = document.querySelector("#container");

// container.addEventListener("click",(event)=>{
//     const randC =`rgb(${random(255)},${random(255)},${random(255)})`;
//     event.target.style.backgroundColor =randC;
// })

// function random(num){
//     let rand = Math.floor(Math.random()*num)+1;
//     return rand;
// }

// const myArray = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
// const obj = {
//     "gallery-start/images/pic1.jpg" : "this is pic 1",
//     "gallery-start/images/pic2.jpg" : "this is pic 2",
//     "gallery-start/images/pic3.jpg" : "this is pic 3",
//     "gallery-start/images/pic4.jpg" : "this is pic 4",
//     "gallery-start/images/pic5.jpg" : "this is pic 5"
//  };
// let thumbBar = document.querySelector(".thumb-bar");
// let displayImg = document.querySelector(".displayed-img");
// const button = document.querySelector("button");
// const overlay = document.querySelector(".overlay");
// let imgSrc;
// let imgAlt;
// for(let i =0 ; i <myArray.length ;i++){
//         let thumbImg =document.createElement("img");
//         thumbImg.setAttribute("src",`gallery-start/images/${myArray[i]}`);
//           thumbImg.setAttribute("alt",obj[`gallery-start/images/${myArray[i]}`]);
//         thumbBar.appendChild(thumbImg);
//         thumbImg.addEventListener("click",()=>{
//                 // let addedImgInDisplay = document.createElement("img");
//                 // addedImgInDisplay.src =`gallery-start/images/${myArray[i]}`;
//                 displayImg.src =`gallery-start/images/${myArray[i]}`;
//                 // addedImgInDisplay.alt =obj[`gallery-start/images/${myArray[i]}`];
//                 displayImg.alt =obj[`gallery-start/images/${myArray[i]}`];
//                 // displayImg.appendChild(addedImgInDisplay);
//         });
// }

// button.addEventListener("click",darkenFullImg);


// function darkenFullImg(){
//         let btnClass = button.getAttribute("class");//className of button :dark
//         if(btnClass === "dark"){
//                 button.setAttribute("class","light");
//                 button.textContent = "Lighten";
//                 overlay.style.backgroundColor = "rgb(0,0,0,0.5)";

//         }
//         else{
//                 button.setAttribute("class","dark");
//                 button.textContent ="Darken";
//                 overlay.style.backgroundColor= "rgb(0,0,0,0)";
//         }
// }
