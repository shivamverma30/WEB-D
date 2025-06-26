
// let btn = document.querySelector("button");

// let url = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async ()=>{
//    let link = await getImage();
//    console.log(link);
//    let img = document.querySelector("#result");
//    img.setAttribute("src" , link);

// })



// async function getImage() {              //above function using async await
//     try{
//           let res = await axios.get(url);
//           //let data = await res.json();  now no need to convert in json axios already give it to json form 
//          return res.data.message;
//       } catch(e){
//           console.log(" error is : " , e);
//           return "No image found ";
//       }
      
//   }


// get jokes api 

// const url ="https://icanhazdadjoke.com/";
// async function getJoke() {
//     try {
//         const config = { headers : { Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);    // give the data in the html form so we convert it into the json form so we will use the header methos application/json 
//     }catch(e){
//         console.log("we got a error : ",e );
//     }
// }

// updating query string 

let url ="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
 
btn.addEventListener("click",async () =>{
    let country = document.querySelector("input").value;

    let collArr =  await getColleges(country);
    show(collArr);
});

function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of collArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("error was : ", e); 
        return [];
    }
}
