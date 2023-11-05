import React from 'react';
import './TodoList.css';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className="todo-item">
          {task}
          <button className="delete-button" onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
