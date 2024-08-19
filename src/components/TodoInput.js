import React, { useState } from 'react';
import '../styles/TodoInput.css';

function TodoInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue(''); // Clear the input field after adding the task
      console.log("this is input value " + inputValue)
    }
  };

  return (
    <div className="todo-input-container">
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="task-input"
        placeholder="Enter a task..." 
      />
      <button 
        className="add-task-button"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
