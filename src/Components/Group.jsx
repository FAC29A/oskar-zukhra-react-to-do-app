import React, { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import "./Group.css";

const Group = () => {
  const [tasks, setTasks] = useState([]);
  const [groupName, setGroupName] = useState("Name of the group");
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  // Function to handle adding a task
  const handleAddOrUpdateTask = (newOrUpdatedTask) => {
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id ? { ...task, ...newOrUpdatedTask } : task
        )
      );
    } else {
      setTasks([
        ...tasks,
        { ...newOrUpdatedTask, id: Date.now(), completed: false },
      ]);
    }
    setIsAddTaskOpen(false);
    setEditTask(null); // Reset the editing task
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, updatedTask) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditTask(taskToEdit); // Set the task to be edited
    setIsAddTaskOpen(true);
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
      <div className="button-container">
        <button onClick={() => setIsAddTaskOpen(true)}>Add Task</button>
        <button onClick={handleClearTasks}>Clear Tasks</button>
      </div>
      {isAddTaskOpen ? (
        <AddTask
          isOpen={isAddTaskOpen}
          onClose={() => {
            setIsAddTaskOpen(false);
            setEditTask(null); // Reset the edit task state when closing the modal
          }}
          onAddTask={handleAddOrUpdateTask}
          existingTask={editTask} // Pass the editing task if any
        />
      ) : null}
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
    </div>
  );
};

export default Group;
