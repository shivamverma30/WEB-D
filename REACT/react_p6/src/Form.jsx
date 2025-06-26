import { useState } from "react"


export default function Form () {
    // let [fullName , setFullName]=useState("");
    // let [userName , setUserName]=useState("");
    let [formData,setFormData]=useState({
        fullName: "",
        userName: "",
        password: "",
    })

    // let handleNameChange =(event)=>{
    //    // console.log(event.target.value);    // this is show in the console any chnage in the input section 
    //    setFullName(event.target.value)
    // };

    //   let handleUserName =(event)=>{ 
    //    setUserName(event.target.value)
    // };
    let handleInputChange =(event)=>{
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(newValue);   //fullName
        setFormData((currData)=>{
            //currData[fieldName]=newValue;
            return {...currData,
                [event.target.name] : event.target.value
            };
        })
    }

    let handleSubmit =(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="Write your name here ..." 
            value={formData.fullName}
            // onChange={handleNameChange}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
<br /><br /><br />
              <label htmlFor="username">Username</label>
            <input type="text" placeholder="Write your username ..." 
            value={formData.userName}
           // onChange={handleUserName}
           onChange={handleInputChange}
            id="userName"
            name="userName"
            />
            <br /><br /><br />
              <label htmlFor="password">Password</label>
            <input type="text" placeholder="Write your password ..." 
            value={formData.password}
           // onChange={handleUserName}
           onChange={handleInputChange}
            id="password"
            name="password"
            /> <br /><br /><br />
            <button> Submit </button>
        </form>
    )
}