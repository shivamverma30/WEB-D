import { useState } from "react";

export default function Counter(){
    let [count,setCount] = useState(0);   //here we pass a function in useState(fn)

    let incCount =()=>{
        //setCount(count+1);  // passing as a callback also if this line write multiple time and want 2 ka count increase then not possible so we passing argument 
        setCount((currCount)=>{
            return currCount+1;
        }) ;
        setCount((currCount)=>{
            return currCount+1;
        }) ;
        setCount((currCount)=>{
            return currCount+1;
        }) ;
    };

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase count</button>
        </div>
    );
} 