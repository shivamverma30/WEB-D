const mongoose = require('mongoose');

main().then((res)=>{
        console.log("connection succcesfull");
    }).catch((err)=>{
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type:String,
        required : true ,
    },
    author : {
        type: String,
    },
    price : {
        type: Number,
        min : 1,
    },
    discount:{
        type : Number ,
        default: 0,
    },
    catagory:{
        type : String ,
        enum :["fiction","non-fiction"],
    }
});

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title: "Marvel Comics",
    // author: "sanjay sharma ",
    catagory:"fiction",
    price : "399",     // here we pass number as a string also no give error becoz it convert into number and then store in our db 
});
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

//validation and updation and error 

Book.findByIdAndUpdate("6819234e3735e335fc3bd919",{price :-100},{runValidators:true}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});