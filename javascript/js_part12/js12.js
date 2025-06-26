
// async function and await function returns always a promise

//  async function greet (){
//      throw "weak connection";  
//     return "hello word ! ";
// }

// greet().then( (a)=>{
//     console.log("promise was resolved : ",a);
// })
// .catch((e)=>{
//     console.log("promise got some error : ",e);
// })

// let golu = async ()=>{    // we also make arrow function to async type function which returns always promises 
//     return "golu";
// }

// AWAIT KEYWORD 

// function getNum(){
//     return new Promise(( resolve , reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

//  async function demo (){
//      await getNum();
//      await getNum();
//      await getNum();
//      await getNum();
// }

// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*5)+1;
//         if (num>3){
//             reject("promise rejected");
//         }
//         h1.style.color=color;
//         console.log(`color changed to ${color}!`);
//         resolve("color changed ");
//   },delay);
//   });
// }


//   async  function demo(){
//      try{                   //if promises is rejcted then after these no code will be run to remove this using try and catch 

//         await changeColor("red",1000);
//         await changeColor("blue ",1000);
//         await changeColor("green",1000);
//         await changeColor("yellow",1000);
//     }catch(e){
//         console.log( "error caught ",e);
//     }

//      let a = 3;
//      console.log(a);
//      console.log("new number is : ", a+3);
//   }


// changeColor("red",1000).then( ()=>{
//   console.log("red color was completed ");
//   return changeColor("blue",1000);
// })
// .then(()=>{
//   console.log("blue color was chaanged ");
//   return changeColor("yellow",1000);
// })
// .then(()=>{
//   console.log("yellow color was chaanged ");
// })


// API (JSON)

// let jsonRes = '{"fact":"Jaguars are the only big cats that dont roar.","length":46}';
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);


// OUR first api call 
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
   let fact =  await getFacts();
//    console.log(fact);
   let p = document.querySelector("#result");
   p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

// fetch(url);   // return its a promise then we add then and catch method on them 

// fetch(url)
// .then((res)=>{
//     return res.json();                          // not readable data send then .json use  which is also return a promises to him
// })
// .then((data)=>{
//     console.log("data 1 = ",data);
//     return fetch(url);
// })
// .then((res )=>{
//     return res.json();
// })
// .then(( data2)=>{
//     console.log("data 2 : ", data2);
// })
// .catch((err)=>{
//     console.log(err);
// })
                         
// async function getFacts() {              //above function using async await
//   try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);

//     // let res2 = await fetch(url);
//     // let data2 = await res.json();
//     // console.log(data2);
//     } catch(e){
//         console.log(" error is : " , e);
//     }
    
// }    

// same above code was written using axios 

async function getFacts() {              //above function using async await
  try{
        let res = await axios.get(url);
        //let data = await res.json();  now no need to convert in json axios already give it to json form 
       return res.data.fact ;
    } catch(e){
        console.log(" error is : " , e);
        return "No fact found ";
    }
    
}


