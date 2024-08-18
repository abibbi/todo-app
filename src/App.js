import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([
  
    'Test',
    'Test',
    'Test',
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };


  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app-container">
      <Header />
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
