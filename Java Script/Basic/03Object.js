//SingleTon  
/*A singleton in object-oriented programming is a design pattern where a class is restricted to only instantiate a single instance, ensuring that there is only one global point of access to that instance throughout the application.        "Especially made during constructor"*/

//Object.create()     =>from this a singleton is made.

//Object Literals:


let mySym = Symbol("keyBaby");

const jsDeveloper = {
    name : "Pema",
    [mySym] :  "mykey1",                    //square bracket : To print exact value in output
    "friend name" : "Nissan Kharel",
    age : 21,
    location : "Tinchuli",
    E_mail : "pemanamgur@gmail.com",
    isLoggedIn : false,
    lastLoggedInDay : ["Monday","Tuesday"],
};
// console.log(jsDeveloper.name);
// console.log(jsDeveloper["name"]);

jsDeveloper.E_mail = "pemanamgurtamangseven@gmail.com";
// console.log(jsDeveloper);

// console.log(jsDeveloper.lastLoggedInDay[0]);
// console.log(jsDeveloper["lastLoggedInDay"][0]);

// console.log(jsDeveloper["friend name"]);

// jsDeveloper.key = newKey;
// console.log(jsDeveloper["mySym"]);
// console.log( jsDeveloper[mySym])  //square bracket : To print exact value in output
// console.log(typeof jsDeveloper[mySym]) 


// jsDeveloper.location  = "Chabhil";
// Object.freeze(jsDeveloper);          //after freeze there is no change in object.
// jsDeveloper.location = "Boudha";
// console.log(jsDeveloper);


jsDeveloper.greet =function(){
    console.log("Tasidelek...");
}

jsDeveloper.greetTwo =function(){
    console.log(`Tasidelek... to , ${this.name}`);    
}
// console.log(jsDeveloper);
// console.log(jsDeveloper.greet);     ////reference laucha. 
// console.log(jsDeveloper.greet());  //value aucha  and we know we use ()           
// console.log(jsDeveloper.greetTwo());  //value aucha and we know we use ()



