import React, { useState } from 'react';
import './AddTask.css'

const AddTask = ({ isOpen, onClose, onAddTask  }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  //(add id for each task)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && priority.trim() !== '') {
      onAddTask({ title, priority });
      onClose();
      setTitle('');
      setPriority('');
    }
  };

  return (
    <div>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" value={title} onChange={handleTitleChange} />
              <label htmlFor="priority">Priority:</label>
              <select id="priority" value={priority} onChange={handlePriorityChange}>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default AddTask;
