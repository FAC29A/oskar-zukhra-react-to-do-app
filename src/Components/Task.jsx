import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onDelete, onEdit, onComplete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="task">
      <span className={task.completed ? 'task-completed' : ''}>
        {task.title} - Priority: {task.priority}
      </span>
      <button className="taskButton" onClick={toggleMenu}>
        :
      </button>
      {showMenu && (
        <div className="contextMenu">
          <ul>
            <li
              className="contextMenuItem"
              onClick={() => {
                onComplete(task.id);
                toggleMenu();
              }}
            >
              {task.completed ? 'Mark as To-Do' : 'Mark as Complete'}
            </li>
            <li
              className="contextMenuItem"
              onClick={() => {
                onEdit(task.id);
                toggleMenu();
              }}
            >
              Edit Task
            </li>
            <li
              className="contextMenuItem"
              onClick={() => {
                onDelete(task.id);
                toggleMenu();
              }}
            >
              Delete Task
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Task;
