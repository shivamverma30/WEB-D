// let btns = document.querySelectorAll("button");
// // console.dir(btn);

// for (btn of btns){
//     // btn.onclick= sayHello;
//     // btn.onclick=print;
//     // btn.onmouseenter=function(){
//     //     console.log("you hover the btn");
//     // }

//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",print);
//     btn.addEventListener("dblclick",function(){
//         console.log("you double clicked me !")
//     })
// }
// function sayHello() {
//  alert("button was clicked ");
// }

// function print() {
//     alert("hello! ");
//    }

// let btn = document.querySelector("button");
// let p =document.querySelector("p");
// let h1= document.querySelector("h1");
// let h3=document.querySelector("h3");
// function changecolor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";
// }

// btn.addEventListener("click",changecolor);
// p.addEventListener("click",changecolor);
// h1.addEventListener("click",changecolor);
// h3.addEventListener("click",changecolor);


// keyboard events

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
 
// inp.addEventListener("keydown",function(event){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
// });


// let inp =document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("code=" , event.code);  // arrowUp(U) , arrowDown(D), arrowRight(R) , arrowLeft(L)
//     if (event.code=="KeyU"){
//         console.log("Charcter moves up ");
//     }else if (event.code=="KeyD"){
//         console.log("Charcter moves down ");
//     }else if (event.code=="KeyR"){
//         console.log("Charcter moves right ");
//     }else if (event.code=="KeyL"){
//         console.log("Charcter moves left");
//     }
// });


// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = this.elements[0];                      //document.querySelector("#user");
//     let pass = this.elements[1];                       //document.querySelector("#pass");
//     // console.log(user.value);
//     // console.log(pass.value);
//     console.log(`hello ${user.value} `);
// });  



//More events {change event this is track only intial and final value of the stage }

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//      event.preventDefault();
// });
// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value : " , this.value)
// });

// let pass = document.querySelector("#pass");
// pass.addEventListener("change",function(){
//     console.log("input event");
//     console.log("final value : " , this.value)
// });



// text editor 
let inp = document.querySelector("#text");
let  p = document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
});

