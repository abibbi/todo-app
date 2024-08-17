import React, {useState}from 'react';
import '../styles/TodoInput.css';
import TodoList from './TodoList';

function TodoInput() {
  //Declares a state variable to ghold the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle the input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue)
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
      onClick={handleChange}
      >Add</button>
    </div>
  );
}

export default TodoInput;
