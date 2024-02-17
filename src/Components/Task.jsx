import React, { Component } from 'react';
import './Task.css';

const Task = ({ task }) => {
  return (
    <div className="task">
      <span>{task.title}</span> - <span>Priority: {task.priority}</span>
      <button className="taskButton">:</button>
    </div>
  );
};

export default Task;
