const mongoose = require ("mongoose");
const  { Schema } = mongoose;

main()
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
    item : String ,
    price: Number,
});

const customerSchema = new Schema ({
    name : String,
    orders :[
        {
            type :Schema.Types.ObjectId,
            ref : "order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async ()=>{
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete",async (customer)=>{
    if (customer.orders.length){
        let res = await Order.deleteMany({ _id: {$in: customer.orders}});
        console.log(res);
    }
});

const Order = mongoose.model("order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);


//functions 
const findCustomer = async()=>{
    // let cust1 = new Customer ({                // here its show in terminal full object
    //     name : "Rahul Kumar",
    // });

    // let order1 = await Order.findOne({item: "Chips"});
    // let order2 = await Order.findOne({item: "Chocolate"});

    // cust1.orders.push(order1);
    // cust1.orders.push(order2);
    // let result = await cust1.save();
    // console.log(result);

    let result = await Customer.find({}).populate("orders");   // to show the database store only id 
    console.log(result[0]);

};

findCustomer ();

// const addOrders = async ()=>{
//     let res = await Order.insertMany([
//         {item : "Somasa",price: 12},
//         {item : "Chips",price :10},
//         {item : "Chocolate",price : 40}
//     ]);
//     console.log(res);
// };

// addOrders();


//add customer function
const addCust = async ()=>{
    let newCust = new Customer({
        name : "karan Arjun"
    });

    let newOrder = new Order({
        item : "Pizza",
        price : 250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
};

//deletion function 

const delCust = async()=>{
    let data = await Customer.findByIdAndDelete();  // id dalni h jiksi bhi ho 
    console.log(data);
}

addCust();
// delCust();

