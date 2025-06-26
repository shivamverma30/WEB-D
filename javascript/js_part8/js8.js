//array methods 


// for each 

// let arr=[1,2,3,4,5,6];
// let print = function(el){
//     console.log(el);
// };

// function print(el){
//      console.log(el);
// };

//  const print = (el) => {
//     console.log(el); 
// }

// arr.forEach(print);
  
// let arr =[{
//     name : "shivam",
//     marks: 95
// },{
//   name : "Golu",
//   marks: 96  
// },{
//     name :"XYZ",
//     marks: 89.5
// }];

// arr.forEach((arr)=>{
//     console.log(arr.marks);
// });

//arr.map method

// let arr =[1,2,3,4,5,6];

// let d =arr.map((el)=>{
//     return el*2;
// });

//  let d = arr.map( (el)=>{
//     return el.marks/10;
// });



// filter array method 

// let arr =[10,20,30,40,50,100];

//  let d = arr.filter( (el)=>(el%2==0));


//  let d = arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else {
//         return max;
//     }
// });

// PQ 1
// let d = arr.every( (el)=>{
//     return el%10==0; 
//  });


//   let min = arr.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }else {
//         return min;
//     }
// });


// function sum(a,b=7){
//      console.log(a+b);
// }

// const data ={
//     name : "shivam verma ",
//     age : 21 ,
//     email: "vermdmcjhuc@gmail.com"
// };

// let dataCopy ={...data,vill: "chittapurwa "};
// console.log(dataCopy);

// function sum (...args){    // here ...args rest multiple arguments ka bundle bana kar pass krta hai 
//     return args.reduce ((add,el)=>(add+el));
// }


// let arr=["A","B","C","D","E"];
// //  let first=arr[0];
// //  let second =arr[1];
// //  let third =arr[2];

// // let [first ,second ,third]=arr;
// let [first ,second ,...all]=arr;


//distructuring in object literals 

const student ={
    name : "shivam ",
    age :21,
    subject:["math","science","dbms","cn"],
    password :"21`63`1790",
    username : "shivam116",
    city : "BBK"
};

let {password :pass,username: u_name ,city:place ="mumbai"}=student; //her city in student higer periorty if city is not definer in student the altier its given is mumbai