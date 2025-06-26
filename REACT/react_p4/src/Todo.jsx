import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos]=useState([{task : "sample-task",id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };


    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id)=>{
        setTodos((preTodos)=>
            todos.filter((preTodos)=> preTodos.id != id)
        );
    };

let markAllDone = () => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
        return {
      ...todo,
      isDone: true, 
        };
    })
  );
};


let markAsDone = (id) =>{
  setTodos((prevTodos) =>
    prevTodos.map((todo) => {
        if (todo.id == id){
        return {
      ...todo,
      isDone: true, 
        };
    }else{
        return todo;
    }
    })
  );
};

    return (
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} /><br /><br />
            <button onClick={addNewTask}>Add Task</button><br /><br /><br /><hr />
            <h4>Tasks Todo  </h4>
            <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecoration: "line-through"}:{}}>{todo.task}</span>&nbsp;&nbsp;
                    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;
                    <button onClick={()=> markAsDone(todo.id)}>Marks As Done</button>
                    </li>
            ))

            }
            </ul>

            <br /><br /><br />

            <button onClick={markAllDone}>mark All As Done</button>
        </div>
    )
}