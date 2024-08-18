import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="App">
      <Header />
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} />
  
        
    </div>
  );
}

export default App;
   