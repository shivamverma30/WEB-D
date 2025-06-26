// function one (){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three (){
//     let ans = two()+one();
//     return ans;
// }
//three();
  

//+++++++++++++++++++NOTES+++++++++++++

// JS IN SINGLE THREAD(single threaded of javscript only work) 
/*  javascript code request to the api and api give the response 
 if api server is down then javascript file waiting for response 
   if settimeout function executed then its is going on browser which is 
   written in c++/java lang which is capable to multithreading or multile task performe at a one time
    (waiting ka kaam browser ka hota h ...js work only one work at a time)
   in js any settimeout write then it is gone on browser and a time set call stack adding again and the javasript excuting to this 
   
   synchronus ->  all line of code execute one bye one 
   asynchronus -> not in sink when using settimeout i.e. thing then we make our js code asynchronus */ 



// Callback Hell(Asynchronous nature of js accur callback hell problem)

/* 
*/

// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if (nextColorChange) nextColorChange();
//     },delay);
// }
// changeColor("Red" ,1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("orange",1000);
//             });
//         });
//     });
// });           // this is call back(call back HELL) nesting this is major use when we store the data on our databse or api calling one by one 



// changeColor("yellow" ,2000);
// changeColor("green" ,3000);

// setTimeout(() => {
//     h1.style.color = "red "; 
// }, 1000);
// setTimeout(() => {
//     h1.style.color = "yellow "; 
// }, 2000);
// setTimeout(() => {
//     h1.style.color = "green"; 
// }, 3000);



// to prevent the CALL BACK HELL (  use promisses async and await)
/*SETTING UP TO PROMISES
promise-> Defi (the promises object represents the eventual completion ( or failure ) of asynchronus operation and its resulting value ) 
*/

// function savetoDb(data,success,failure){
//     let internetSpeed= Math.floor(Math.random()*10+1);
//     console.log(internetSpeed);
//     if(internetSpeed>4){
//         success();
//     }else{
//       failure(); 
//     }
// }
 
// savetoDb(
//     "SHIVAM VERMA",
//     ()=>{
//         console.log(" sucess : your data was saved ");  // if data 1 is store then only if and only if second data was store so we calling nested call call back hell
//         savetoDb("Hello World ",
//             ()=>{
//             console.log("sucess 2: data 2 saved  ");
//         },
//         ()=>{
//             console.log("failuer 2: data not saved ");
//         });
//     },
//     ()=>{
//         console.log(" failure : weak connection ! data not stored ");  
//     }
// )


// to use promises we optimize the code  call back hell

// function savetoDb(data){
//     return  new Promise((resolve,reject)=>{
//         let internetSpeed= Math.floor(Math.random()*10+1);
//         console.log(internetSpeed);
//     if(internetSpeed>4){
//         resolve( "success : data was saved ");
//     }else{
//       reject(" failure : data was not saved "); 
//     } 
//     });
    
// }

// savetoDb("shivam verma ");

// savetoDb("apna college").then(()=>{
//   console.log("promise resolevd ");
// })
// .catch(()=>{
//   console.log("promise rejected");
// });


// promise channing when we write multiple then i.e known is promises channing 

// savetoDb("apna college").then((result)=>{
//   console.log(" data 1 saved ");
//   console.log( "result of promis" , result);
//   return savetoDb("hello word ");
// })
// .then((result)=>{
//   console.log("data 2 was saved ");
//   console.log( "result of promis" , result);
//   return savetoDb("Golu");
// })
// .then ((result)=>{
//   console.log("data 3 was saved ");
//   console.log( "result of promis" , result);
// })
// .catch((error)=>{
//   console.log("promise rejected");
//   console.log( "error of promis" , error);
// });










// removing callback hell using promises to the old code changing color of heading ...

h1 = document.querySelector("h1");

function changeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      h1.style.color=color;
      resolve("color changed ");
  },delay);
  });
}


changeColor("red",1000).then( ()=>{
  console.log("red color was completed ");
  return changeColor("blue",1000);
})
.then(()=>{
  console.log("blue color was chaanged ");
  return changeColor("yellow",1000);
})
.then(()=>{
  console.log("yellow color was chaanged ");
})

// changeColor("Red" ,1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("orange",1000);
//             });
//         });
//     });
// });

