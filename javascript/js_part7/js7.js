
// //this key word is js...
// const student ={
//      name  : "shivam",
//      age : 22,
//      marks: 89,
//      city: "bbk",
//      getAvg(){
//         let avg=(this.age+this.marks)/2;
//         console.log(avg);
//      }
// };

// //try and catch ...
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);
// }catch(err){
//     console.log("we got a error ");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// arrow function in js 

// const sum =(a,b)=>{
//     console.log(a+b);
// }

// const cube =(n)=>{
//     return n*n*n;
// }

//implicit return 
// const mul=(a,b)=> (a*b);


// set time out function 
// console.log("hello!...");
// setTimeout( ()=>{
//     console.log(" shivam verma ")
// },4000);

// set time interval function 

//  let id = setInterval(()=>{
//     console.log("Golu ");
// },2000);
// let id2 = setInterval(()=>{
//     console.log("shivam ");
// },3000);

// // clearInterval(id);



//this with arrow function 

const student={
    name : "golu",
    marks: 95,
    prop: this,  //global scope 
    getName:function(){
        console.log(this);//gives student object 
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);  //gives parent ka scope student ka scope window
        return this.name;
    },

    getInfo1: function(){
        setTimeout(()=>{        
            console.log(this);   //gives student object 
        },2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);//gives parent ka scope window object 
        },2000);
    },

};


let id = setInterval(()=>{
    console.log("shivam verma");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("clear ran")
},10000);