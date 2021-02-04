import React, { useState } from "react";

const TodoPageForm = ({ addTodoPage }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addTodoPage(title);
    setTitle("");
  };

  return (
    <>
      <input
        aria-label="todo-list-composer"
        type="type"
        value={title}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default TodoPageForm;
