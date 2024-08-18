import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ tasks, deleteTask }) {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </div>
  );
}

export default TodoList;
