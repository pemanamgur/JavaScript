

const body = document.querySelector("body");
const colors = document.querySelectorAll('.container');

colors.forEach(function(button){
   button.addEventListener('click',function(e){
    //    console.log(e);    
    // console.log(e.target.id); 
    const bg_Color = e.target.id;
    // console.log(bg_Color);

    // switch(bg_Color){
    //     case 'yellow' :
    //                  body.style.backgroundColor = "yellow";
    //                  break;
    //     case 'gray' :
    //                  body.style.backgroundColor = "gray";
    //                  break;
    //     case 'green' :
    //                  body.style.backgroundColor = "green";
    //                  break;
    //     case 'red' :
    //                  body.style.backgroundColor = "red";
    //                  break;
    //     default:
    //                 alert("Youe button event is not working");
    //                 break;          
    // }


     


        //  console.log(e.target.id)
        //  console.log(e.target.value);
        // if(e.target.id == 'yellow'){
        //     body.style.backgroundColor = "yellow";
        //     body.style.color = "black";

        // }
        // if(e.target.id == 'gray'){
        //     body.style.backgroundColor = "gray";
        //     body.style.color = "black";
        // }
        // if(e.target.id == 'green'){
        //     body.style.backgroundColor = "green";
        //     body.style.color = "white";
        // }
        // if(e.target.id == 'red'){
        //     body.style.backgroundColor = "red";
        //     body.style.color = "black";
        // }
   })
})