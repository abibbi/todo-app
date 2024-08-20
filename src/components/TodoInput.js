import React, { useState, useRef, useEffect } from 'react';
import '../styles/TodoInput.css';
import { FaPlus } from 'react-icons/fa';

function TodoInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const MAX_LENGTH = 50;
  const [priority, setPriority] = useState('medium');

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
      addTask({ text: inputValue, priority });
      setInputValue('');
      setPriority('medium');
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
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button 
        className="add-task-button"
        onClick={handleAddTask}
      >
        <FaPlus /> Add
      </button>
      {error && <p className="error-message">{error}</p>}
      <p className="char-count">{inputValue.length}/{MAX_LENGTH}</p>
    </div>
  );
}

export default TodoInput;