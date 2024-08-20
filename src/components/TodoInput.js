import React, { useState, useRef, useEffect } from 'react';
import '../styles/TodoInput.css';

function TodoInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const MAX_LENGTH = 50;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= MAX_LENGTH) {
      setInputValue(value);
      setError('');
    } else {
      setError(`Task cannot exceed ${MAX_LENGTH} characters`);
    }
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
      setError('');
    } else {
      setError('Task cannot be empty');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
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
      {error && <p className="error-message">{error}</p>}
      <p className="char-count">{inputValue.length}/{MAX_LENGTH}</p>
    </div>
  );
}

export default TodoInput;