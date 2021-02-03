import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    addTodo(name);
    setName("");
  };

  return (
    <React.Fragment>
      <input
        aria-label="todo-composer"
        type="type"
        value={name}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </React.Fragment>
  );
};

export default TodoForm;
