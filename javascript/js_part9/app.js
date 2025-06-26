// let smallImg = document.getElementsByClassName("oldImg");

// for (let i=0;i<smallImg.length; i++){
//     console.dir(smallImg[i].src="spiderman_img.png" );
// }


// let link = document.querySelectorAll(".box a");

// for (let i=0; i<link.length;i++){
//     link[i].style.color="yellow";
// }


// add the following elements to the container using only javascript and dom methods 

//i) <p> with red text that says "Hey I'm a blue h3 !"

let para1 =document.createElement("p");
para1.innerText="hi i'm Red!";
document.querySelector("body").append(para1);
para1.classList.add("red");


let h3 =document.createElement("h3");
h3.innerText="hi i'm h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1= document.createElement("h1");
let para2= document.createElement("p");
h1.innerText="i'm in a div ";
para2.innerText="ME too";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);
// prepend also use here ......


