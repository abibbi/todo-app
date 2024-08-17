import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
        <Header />
        <TodoInput inputValue={inputValue} setInputValue={setInputValue}  />
        <TodoList className="list-item" />
        
    </div>
  );
}

export default App;
   