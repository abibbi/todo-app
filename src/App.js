import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    const newText = prompt('Edit task:', taskToEdit.text);
    if (newText !== null) {
      const newTasks = [...tasks];
      newTasks[index].text = newText;
      setTasks(newTasks);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <Header />
      <TodoInput addTask={addTask} />
      <TodoList 
        tasks={tasks} 
        completeTask={completeTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;