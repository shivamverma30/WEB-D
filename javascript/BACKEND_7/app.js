const express = require("express");
const app=  express();
const ExpressError = require ("./expressError.js");

const checkToken =(req,res,next)=>{
    let {token}= req.query;
    if (token ==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
}

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

//admin error 
app.get("/admin",(req,res)=>{
 throw new ExpressError(403,"Access to admin is forbidian");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});
  
app.use((err,req,res,next)=>{
  let {status=500,message ="some error occured"}=err;
  res.status(status).send(message);
    res.send(err);
});

app.listen(8080,()=>{
    console.log("listening on port 8080");
});