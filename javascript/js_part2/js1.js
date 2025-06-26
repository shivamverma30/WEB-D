console.log(1+2);
let a =56;
let b=76;
console.log("sum is a+b : ",a+b);



// template leterials 
let pencil=10;
let eraser =20;
let output="the total price is : "+(pencil+eraser) + " rupee";
let  outputl=`the total price is : ${pencil+eraser} rupee`;  //for embaded expersion 
console.log(outputl);
console.log(output);



//practice question
let size="XL";
if(size="XL"){
    console.log("price is Rs.250")
}else if(size="L"){
    console.log("price is Rs.200")
}else if(size="M"){
    console.log("price is Rs.100")
}else if(size="S"){
    console.log("price is Rs.50")
}else{
    console.log("choose a best size ")
}



//pQ 2 
let str="abdjnuechduhc";
if((str[0]=="a") && (str.length>3)){
    console.log("good string");
}else{
    console.log("bad string");
}


//pq 3 

let day = 10;

switch(day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wedday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
    default:
    console.log("unde");
}


//prompt alert 



// alert("Shivam is on the way ");
// console.error("Error");
// console.warn("this is warning ");


let firstName = prompt("Enter your first name ");
let lastName = prompt("Enter your last name here ");
console.log( "Welcome",firstName," ",lastName);