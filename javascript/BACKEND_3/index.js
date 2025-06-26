const express = require ("express");
const app = express();
const path = require("path"); 

const port = 8080;




app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view wngine","ejs");  // no need to require ejs express internally require to the ejs 
app.set("views",path.join(__dirname,"/views"));  // this is adding bcoz if we go back and run this then error error was in previuos directory search the file home.ejs which is not here so this is adding  (require path pakage also )
app.get("/",(req,res)=>{       // ejs not send the response this is render the response because some time file are rendering 
    //res.send("this is home");   //res.send(res.render)=> ye ek badi file ko bhejta hai (home.ejs)
    res.render("home.ejs");  //express search views folder so views ke andar home.ejs banyenge 
});




app.get("/ig/:username",(req,res)=>{
    
    //  const followers = ["adam","bob","steve","abc"];
    // let {username }= req.params;
    //res.render("instagram.ejs",{username,followers});
    
    let {username }= req.params;
    const instData = require ("./data.json");
    const data = instData[username];
    if(data){
        res.render("instagram.ejs",{data});
    } else {
        res.render("error.ejs");
    }
    

});




app.get("/hello",(req,res)=>{
    res.send("hello");
});


app.get("/rolldice",(req,res)=>{

    let diceVal = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs", {num : diceVal});
});


app.listen(port ,()=>{  
    console.log(`listening on port ${port}`);
});
