import { useState } from "react";

export default function TodoForm({addTodo}) {
    const [todoInput, setTodoInput] = useState("");

    function handleSubmit(event) {
        console.log("Submitted");
        event.preventDefault();

        console.log(todoInput);
        addTodo(todoInput);
        setTodoInput("");
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="todoForm">
            <input type="text" 
            name="todoInput"
            className="todoForm_input"
            value={todoInput}
            placeholder="Enter your task" 
            onChange={(e) => setTodoInput(e.target.value)}/>
            <button className="todoForm_btn">Add task</button>
        </form>
    );
}