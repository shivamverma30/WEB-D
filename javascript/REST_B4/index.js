const express = require ("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

const {v4: uuidv4}=require('uuid');// auto matic created id 
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));  // fornted se aaye data ko express smajh paaye isiliye 

app.set("view engine","ejs");   //start ejs engine rendering
app.set("views",path.join(__dirname,"views"));   //path join one step backword run then run 
app.use(express.static(path.join(__dirname,"public")));   //same as upper 



let posts =[
    {
        id:uuidv4() ,
        username:"apnacollege",
        content : "I Love coding !"
    },
    {
        id:uuidv4() ,
        username:"Shivam verma",
        content : "Hard work is importent "
    },
    {
        id:uuidv4(),
        username:"Anuj",
        content : "I got first internship"
    },
]


// 1.create main route GET/posts
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});



//2. to add new post (two step flow )kon sa user add kr rha h and then  accept post request (sabse phale ek button pe click krke form ayega post ka then form submit go to Db and post request jo new post create kregi)
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4(); 
    posts.push({id,username,content});
    res.redirect("/posts");
});


//3. view indivisual post
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);

    res.render("show.ejs",{post});
});


//4.update content (any post edit patch request )

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content=newContent;
    res.redirect("/posts");
});


//5.edit 
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});


// 6.to delete specific post 
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
     posts = posts.filter((p)=> id !== p.id);
     res.redirect("/posts");
});



app.listen(port ,()=>{
    console.log("listening to port : 8080");
})