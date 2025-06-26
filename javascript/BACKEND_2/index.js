const express = require("express");  // this is a basically give function 
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
});


app.get("/",(req,res)=>{
    res.send("hello ! i am root path");
});

app.get("/:username/:id",(req,res)=>{
    let {username, id  }=req.params;
    res.send(`this account belong to @${username}`);
});

app.get("/search", (req,res)=>{
    console.log(req.query);
    res.send("no result");
})




// app.get("/apple",(req,res)=>{
//     res.send("you contact apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("you contact orange path");
// })

// app.use((req,res)=>{
//     //console.log(req);
//     console.log("request recive");
//     res.send("this is a basic response");
// })