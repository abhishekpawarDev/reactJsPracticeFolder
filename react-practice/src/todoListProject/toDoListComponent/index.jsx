import React, { useState } from "react";

const ToDoListComponent = () => {
    const [value, setValue] = useState("");
    const [todo, setTodo] = useState([]);

    const addTodoTask = (e) => {
            setTodo([...todo, { id: Math.random(), task: value }]);
            setValue(""); 
    };

    const deleteTodoTask = (id) => {
        setTodo(todo.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                    <input
                        type="text"
                        placeholder="Enter Task"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={addTodoTask}>Add Task</button>
            </div>
            <div>
                {todo.map((item) => (
                    <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                        <p style={{ marginRight: "10px" }}>{item.task}</p>
                        <button onClick={() => deleteTodoTask(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoListComponent;
