const express= require("express");
const app = express();


// app.use((req,res,next)=>{
//     console.log("Hi! I am 1 middleware");
//    next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi! I am 2 middleware");
//    next();
// });

 const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token === 'giveacccess'){
        next();
    }
    throw new Error("ACCCESS DENOED");
}
app.get("/api",checkToken, (req,res)=>{
    res.send("some data");
});


app.get("/wrong",(req,res)=>{
    abcd=abcd;
});

//loger -morgan
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//  console.log(req.method,req.hostname,req.path,req.time);
//  next();
// });

app.get("/",(req,res)=>{
    res.send("Hi! I am root");
});

app.get("/random",()=>{
    res.send("this is a random page");
});

//404 
app.get((req,res)=>{
    res.send("page not found");
});

app.listen(8080,()=>{
    console.log("server listening to port 8080");
});

