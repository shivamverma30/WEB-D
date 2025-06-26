const mongoose = require ("mongoose");
const  { Schema } = mongoose;

main()
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// take user and address example (one to few)APPORACH 1{STORE THE CHILD DOCUMENT INSIDE PARENT WHEN <500 INFORMATION }
 const userSchema = new Schema({
    username : String ,
    addresses :[
        {
            _id :false,  //mongoose give id child also so if id not want then set this attribute 
        location : String,
        city : String ,
    },
  ],
 });

 const User = mongoose.model("User",userSchema);

 const addUsers = async()=>{
    let user1 = new User({
        username :"amanchaturvedi",
        addresses:[{
            location : "221 deepika place",
            city : "BBK"
    }]
    });
    user1.addresses.push({location:"mharishnagar",city:"LKO"});
    let result = await user1.save();
    console.log(result);
 };

 addUsers();

