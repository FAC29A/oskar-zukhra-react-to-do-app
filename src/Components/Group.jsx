import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import './Group.css';

const Group = () => {
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to handle clearing all tasks (later we will clear only the completed tasks)
  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="group-container">
      <h2>To-Do Group</h2>
      <AddTask onAddTask={handleAddTask} />
      {/* Render tasks */}
      <ul>
        {tasks.map((task, index) => (
          // Pass each task object as a prop to the Task component
          <Task key={index} task={task} />
        ))}
      </ul>
      {/* Button to clear all tasks */}
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </div>
  );
};

export default Group;
