import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid";
import TaskItem from "./TaskItem";


export default function TodoWrapper() {
    // to manage the list of the tasks
    const [todosList, setTodosList] = useState([]);

    // function to create an object with related properties for each todo item
    function addTodo(todoName) {
        setTodosList([...todosList , {task: todoName, id: uuidv4(), completed: false}]);
    }

    // to toggle between task completed and not completed 
    function handleComplete(id) {
        // 
        setTodosList(todosList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
        // console.log("completed");
    }

    // to delete a task
    function deleteTask(id) {
        // return only the todo that doesn't have the specified id
        setTodosList(todosList.filter(todo => todo.id !== id));
        // console.log("deleted");
    }

    // to store the todosList in the local storage
    useEffect(()=> {
        if(todosList.length > 0) {
            localStorage.setItem("todosListLocal", JSON.stringify(todosList));
        }
    }, [todosList]); // this useEffect will be executed only once 
    // when the component is loaded

    // to get the todosList from the local storage
    useEffect(() => {
        const todosListLocal = localStorage.getItem("todosListLocal");
        if(todosListLocal) {
            setTodosList(JSON.parse(todosListLocal));
        }
    }, [])

    // console.log(todosList)
    return(
        <div className="todoWrapper">
            <TodoForm addTodo={addTodo} />
            {/* map through todoList and for each todo in the list I have
               to create an element */}
            {todosList.map((todo, id) => 
            <TaskItem todo={todo} 
                        key={todo.id} 
                        handleComplete={handleComplete} 
                        deleteTask={deleteTask} />)}
        </div>
    );

}

// create, export, import, use a component
// state - to store some data and update UI
// useEffect
// key 
// props
// how to create a basic application
