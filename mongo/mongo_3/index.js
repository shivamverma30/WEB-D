const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require ("path");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError.js");


app.set("views",path.join(__dirname , "views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true})); // to parsing the data from post request in form 
app.use(methodOverride('_method'));

main().then(()=>{console.log("connection succesful");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

}

//Index route 
app.get("/chats",asyncWrap(async(req,res)=>{
        let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
}));


//New route 
app.get ("/chats/new",(req,res)=>{
    throw new ExpressError(404,"page not found");
 res.render("new.ejs");
});


//Create Route 
app.post("/chats",(req,res)=>{
    try{
        let {from,to,msg}=req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()
    .then(res => {
        console.log("chat was saved ");
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
    }catch (err){
        next(err);
    }
    
});

//asyncwrap function (we also use try and catch but asyncWrap is th better way to handle the error ) also we remove all the try catch block to the async wrap function 
function asyncWrap(fn){
    return function (req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}


//NEW-SHOW route
app.get("/chats/:id",asyncWrap(async (req,res,next)=>{
        let {id }= req.params;
    let chat = await Chat.findById(id);
    if (!chat){
        next(new ExpressError(404,"chat not found"));
    }
    res.render("edit.ejs",{chat});
}));



//Edit route 
app.get("/chats/:id/edit",asyncWrap(async(req,res)=>{
         let {id} = req.params;
     let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
}));

//update route 
app.put("/chats/:id",asyncWrap(async(req,res)=>{
        let {id}=req.params;
    let {msg : newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg},
        {runValidators: true,new :true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
}));


//delete rout 
 app.delete("/chats/:id",async (req,res)=>{
    try{
        let {id}= req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
    
 });


let chat1 = new Chat({
    from : "neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at : new Date(),
});
chat1.save().then (res => {
    console.log(res);
});

app.get("/",(req,res)=>{
    res.send("root is working ");
});


//mongoose error handler (validation error or cast error )
const handleVlidationErr =(err)=>{
    console.log("This is a Validation error please folloe some rules");
    console.dir(err.message);
    return err;
}
app.use ((err,req,res,next)=>{
    console.log(err.name);
    if (err.name==="validationError"){
        err = handleVlidationErr(err);
    }
    next(err);
});

//Error handling middleware
app.use((err,req,res,next)=>{
    let {status = 500,message ="some erroe occured"}=err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("sarver is listeing on port 8080");
});