// TodoItem component created to host todo logic

import React from "react";
import "./TodoItem.css";

// destructure the new property "setTodo"
const TodoItem = ({ name, isDone, id, toggleDone, deleteTodo }) => (
  <div className="todo-item">
    <span className="todo-item__completed" onClick={() => toggleDone(id)}>
      {isDone && <img alt="done" src={`${process.env.PUBLIC_URL}/tick.png`} />}
    </span>
    <span className="todo-item__name">{name}</span>
    <span onClick={() => deleteTodo(id)} className="todo-item__delete">
      x
    </span>
  </div>
);

export default TodoItem;
