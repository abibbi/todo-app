import React from 'react';
import '../styles/TodoItem.css';

function TodoItem({ task }) {
  return (
    <div className="todo-item">
      <span className="task-name">{task}</span>
      <div className="task-actions">
        <button className="complete-task-button">✔</button>
        <button className="edit-task-button">✏️</button>
        <button className="delete-task-button">✖</button>
      </div>
    </div>
  );
}

export default TodoItem;
