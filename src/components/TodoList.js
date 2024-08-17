import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';
import TodoInput from './TodoInput';

function TodoList({task}) {
  
  const tasks = [];

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
