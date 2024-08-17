import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList() {
  
  const tasks = ['Test','Test','Test'];

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
