import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  };

  return (
    <>
      <input
        aria-label="todo-composer"
        type="type"
        value={name}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default TodoForm;
