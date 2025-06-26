// let student ={
//     name: "shivam",
//     age : 22,
//     gender : "Male",
//     marks : 84
// };
// student.pass=5;
// student.marks=97;


// thread twitter post therad
// const post = {
//     username: "@golu3267194",
//     content : "this is my fist post ",
//     likes : 150,
//     reposrs: 5,
//     tags : ["@apnacollehe","@delta"]
// };


// const obj={
//     1: 'a',
//     2: 'b',
//     null:'c',
//     undefined:'d',
//     true:'e'
// };


//nested object 

// const student ={
//     shivam:{
//         name :"shivam ",
//         age : 22,
//         exam : "pass",
//         city : "BBK"
//     },
//     gyan:{
//         name :"gyan ",
//         age : 22,
//         exam : "pass",
//         city : "BBK"
//     },
//     anuj:{
//         name :"shivam ",
//         age : 22,
//         exam : "pass",
//         city : "BBK"
//     }
// };


//array of objects 

// const student =[
//     {
//         name :"shivam ",
//         age : 22,
//         exam : "pass",
//         city : "BBK"
//     },
//     {
//         name :"gyan ",
//         age : 22,
//         exam : "pass",
//         city : "BBK"
//     },
//     {
//         name :"shivam ",
//         age : 22,
//         exam : "pass",
//         city : "BBK"
//     }
// ]


//  let num=Math.floor(Math.random()*100)+1;


// user enetrs a max numbers & then tries to guess a random number between 1 to max 

const max =prompt ("Enter a maximum number");
 
const random =(Math.floor(Math.random()*max)+1);
let guess = prompt("guess a number ");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if (guess==random){
        console.log("nice guess ! congruts",random);
        break;
    }else if (guess<random){
        guess= prompt("your enter number is small guess greater number ");
    }else {
        guess= promp("guess smaller number ");
    }
   
}