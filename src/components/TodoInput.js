import React from 'react';
import '../styles/TodoInput.css';

function TodoInput() {
  return (
    <div className="todo-input-container">
      <input type="text" className="task-input" placeholder="Enter a task..." />
      <button className="add-task-button">Add</button>
    </div>
  );
}

export default TodoInput;
