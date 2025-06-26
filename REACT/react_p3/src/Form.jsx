
function handleFormsubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}


export default function Form(){
    return (
         <form action="" onSubmit={handleFormsubmit}>
            <input placeholder="write something" type="text" />
           <button>Submit</button>
         </form>
    );
}