import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import './Group.css';

const Group = () => {
  const [tasks, setTasks] = useState([]);
  const [groupName, setGroupName] = useState('Name of the group');

  // Function to handle adding a task
  const handleAddTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        ...newTask,
        id: Date.now(), // unique ID
        completed: false,
      },
    ]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to handle clearing all tasks (later we will clear only the completed tasks)
  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  return (
    <div className="group-container">
      <input
        type="text"
        value={groupName}
        onChange={handleGroupNameChange}
        className="group-name-input"
      />
      <AddTask onAddTask={handleAddTask} />
      {/* Render tasks */}
      {tasks.map((task) => (
        <ul>
          <Task
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onEdit={(updatedTask) => handleEdit(task.id, updatedTask)}
            onComplete={handleComplete}
          />
        </ul>
      ))}
      {/* Button to clear all tasks */}
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </div>
  );
};

export default Group;
