import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addNewTask = () => {
        if (input.trim()) {
            setTasks([...tasks, { text: input, done: false }]);
            setInput('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const completeTask = (index) => {
        const newTasks = tasks.map((task, i) => 
        i === index ? { ...task, done: !task.done } : task );
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <div className="header">
                <h1>ToDo - React App</h1>
            </div>
            <div className="todo container">
                <div className="Top">
                    <input type="text" value={input} placeholder="Enter the task name" onChange={(e) => setInput(e.target.value)}/>
                    <button className="btn-add" onClick={addNewTask}>Add Task</button>
                </div>

                <ul className="all_lists">
                    {tasks.map((task, index) => (
                    <li key={index} className={task.done ? 'task done' : 'task'}>
                        <div className="task_name">
                            <input type="checkbox" onClick={() => completeTask(index)} />
                            {task.text}
                        </div>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp; 