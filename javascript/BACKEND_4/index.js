const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
 

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database: 'delta_app',
    password:'Golu@123'
  });

  let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };


// 1. Home Route "/"
  app.get("/",(req,res)=>{
    let q = `SELECT count(*) FROM user`;
    try{
    connection.query(q,(err,result)=>{
        if (err) throw err;
         let count = result[0]["count(*)"];
         res.render(("home.ejs"),{count});
       });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});



//2. show route 
app.get("/user",(req,res)=>{
  let q = `SELECT * FROM user`;
  try{
  connection.query(q,(err,users)=>{
      if (err) throw err;
       console.log(users);
       res.render("showusers.ejs",{users});
     });
}catch(err){
  console.log(err);
  res.send("some error in DB");
}
});


//3. Edit route 
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result)=>{
        if (err) throw err;
         let user = result[0];
         res.render("edit.ejs",{user});
       });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

//UPDATE(DB) ROUTE (3 step process 1->search user in the base of id 2->check form password id same as db password 3-> updated username in the db using a simple query )
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password: formPass,username: newUsername}=req.body; //step 2
  let q = `SELECT * FROM user WHERE id ='${id}'`;  //step 1 
  try{
    connection.query(q,(err,result)=>{
        if (err) throw err;
         let user = result[0];
         if(formPass!=user.password){
          res.send("WRONG PASSWORD");
         }else{
          let q2=`UPDATE user SET username ='${newUsername}' WHERE id ='${id}'`; //step 3
          connection.query(q2,(err,result)=>{
            if (err) throw err;
            res.redirect("/user");
          });
         }
       });
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});





  app.listen("8080",()=>{
    console.log("server is listing ");
  });



  // //inserting new data
  // let q = "INSERT INTO user (id ,username ,email,password) VALUES ?";
  // let data =[];
  // for (let i =1;i<=100;i++){
  //   data.push(getRandomUser()); //100 fake user ka data 
  // }  

  // try{
  //   connection.query(q,[data],(err,result)=>{
  //       if (err) throw err;
  //        console.log(result);
  //      });
  // }catch(err){
  //   console.log(err);
  // }
  // connection.end();
  
