import React from 'react';
import { FaCheck, FaPencilAlt, FaTrash } from 'react-icons/fa';
import '../styles/TodoList.css';

function TodoList({ tasks, completeTask, editTask, deleteTask }) {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'low':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'high':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className={`todo-item ${task.completed ? 'completed' : ''}`}>
          <div className="task-content">
            <span className="task-text">{task.text}</span>
            <span 
              className="task-priority"
              style={{ 
                marginLeft: '10px', 
                color: getPriorityColor(task.priority),
                fontWeight: 'bold'
              }}
            >
              {task.priority}
            </span>
          </div>
          <div className="task-actions">
            <button onClick={() => completeTask(index)} className="action-button complete-button">
              <FaCheck />
            </button>
            <button onClick={() => editTask(index)} className="action-button edit-button">
              <FaPencilAlt />
            </button>
            <button onClick={() => deleteTask(index)} className="action-button delete-button">
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;