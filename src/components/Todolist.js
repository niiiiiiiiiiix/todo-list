import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([
    // initial state
    {
      id: uuidv4(),
      name: "Buy milk",
      isDone: false,
    },
    {
      id: uuidv4(),
      name: "Do push up",
      isDone: true,
    },
  ]);

  const toggleDone = (id) => {
    // function that toggles done/not done (green tick)
    const todoIndex = todos.findIndex((object) => object.id === id);
    // findIndex returns the index of the first object in the todos array whereby object.id is equal to the position of the "id"
    // in the example of id: uuidv4(), name:"Buy milk", isDone: false, this returns 1 because toggleDone is used in TodoItem.js where the item's actual id has been passed in
    const updatedTodos = [...todos];
    // create an array updatedTodos that is just todos
    updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;
    // each time this runs, it updates the isDone value to the opposite value (boolean)
    setTodos(updatedTodos);
    //
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (name) => {
    if (name.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: name,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const displayTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        name={todo.name}
        isDone={todo.isDone}
        key={todo.id}
        id={todo.id}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    ));
  };

  return (
    <React.Fragment>
      <h1>TodoList</h1>
      <div>{displayTodos()}</div>
      <br></br>
      <TodoForm addTodo={addTodo}></TodoForm>
    </React.Fragment>
  );
};

export default TodoList;
