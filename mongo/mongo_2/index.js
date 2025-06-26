const mongoose = require('mongoose');  // to requiring the monogoose 

// (remove becuse same dealing with lower line code ) mongoose.connect('mongodb://127.0.0.1:27017/test');    // connect method be like as http mongodb know its connect to the mongodb and then local host and port number is present in their after runing this js file this is awaiting for return promisess 

main().then((res)=>{
        console.log("connection succcesfull");
    }).catch((err)=>{
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// create first schema 
const userSchema = new mongoose.Schema({
    name : String ,
    email : String,
    age : Number,
});
//create model 
const User = mongoose.model("User",userSchema);


// //insert into model
// const user1 = new User({
//     name : "Golu",
//     email: "vermashbcdb@u8eu28.com",
//     age : 22,
// });
// user1.save().then((res)=>{   // save to db 
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// insert multiple 
// User.insertMany([
//     {name : "golu",email:"vermashivam302002@gmail.com",age : 22},
//     {name : "anuj ",email:"vermashivam302002@gmail.com",age : 22},
//     {name : "shubham ",email:"vermashivam302002@gmail.com",age : 22},
// ]).then((res)=>{
//     console.log(res);
// });

//find in mongooDb(check on mongoosejs.com)
// User.findById("681912029b3804313b344a8c").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//update 
// User.updateMany({age: {$gte: 22}},{age: 78}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// find and update (first find then update)({new : true } use for print updated data this is by default set as false)
// User.findOneAndUpdate({name : "golu"},{age:35},{new :true}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//delete in mongoose 
// userSchema.deleteOne({name:"golu"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });




