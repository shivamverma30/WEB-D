const express = require ("express");
const app = express();

const port =8080;


app.use(express.urlencoded({extended:true}));   // not fetch the directly data becoz data send in the request body form  middleware use 
 //app.use(express.json);   when we send the data in json form (string double code me ho then )   middleware use 
app.get("/register",(req,res)=>{
    let {user,password}=req.query;   // normally get the data becoz data send in the query form 
    res.send(`standard GET response . Welcome ${user}!`);
});


app.post("/register",(req,res)=>{ 
    // not fetch the directly data becoz data send in the request body form (express data read nhi kar pata h isiliye parse krna padta url en coded  )
    let {user,password}=req.body;
    res.send(`standard GET response . Welcome ${user}!`);
});


app.listen(port ,()=>{
    console.log(`listening to port ${port}`);
})