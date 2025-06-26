// let n = prompt("enter a number ");
// n=parseInt(n);
// for (let i=1;i<=10;i++){
//     console.log(n*i);
// }



// const favM="thor";
// let guess=prompt("guess my fev movie ");

// while((guess!=favM)&&(guess!="quit")){
//     guess=prompt("wrong try again ");
// }
// if(guess==favM){
//     console.log("congratulation!!");
// }else{
//     console.log("you quit ");
// }

let todo=[];
let req=prompt("please enter your request");

while (true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("-----------");
        for (let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
    }else if(req=="add"){
        let task=prompt("please enter the task what do you want");
        todo.push(task);
        console.log("task added");
    }else if (req=="delete"){
        let idx=prompt("please enter the task index ");
        todo.splice(idx,1);
        console.log("task deleted");
    }else {
        console.log("wrong req");
    }
    req=prompt("please enetr your req");
}