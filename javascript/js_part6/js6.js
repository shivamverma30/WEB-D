//function 

// function hello(){
//     console.log("hello!!!...");
// }


//pq 02 
//create a function to roll dice &always display the value of the dice (1 to 6)

// function dice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// dice();


// // function with arguments 
// function a(name ,age ){
//     console.log(`${name}'s age is ${age}`);
// }
//  a("golu",23);


// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }

// avg(3,3,3);

// function table(n){
//     for (let i=1;i<=10;i++){
//         console.log(i*n);
//     }
// }


// create a function that returns the sum of numbers from 1 to n


// function sumUptoN(n){
//     let sum=0;
//     for (let i=1; i<=n; i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }



//create a function that returns the concatenation of all string in an array 

// let str =["hi","hello","bye","!"];
// function concat(str){
//     let result="";
//     for (let i=0;i<str.length;i++){
//         result+=str[i];
//     }
//     console.log(result);
// }


//scope 
// function outerF(){
//     function innerF(){
//         console.log(x);
//         console.log(y);
//     }
//     let x=9;
//     let y=8;
//     innerF();
// }


const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
};

