import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import "./TodoItem.css";

const TodoList = ({ title, deleteTodoPage, id }) => {
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
    // updates setTodos
  };

  const addTodo = (name) => {
    // takes in a parameter name e.g. " Hello World "
    // if after trimming parameter e.g. "Hello World"
    // "Hello World" is not equal to empty string
    // so will continue with the rest of the code
    if (name.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: name,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    // function that deletes a todo item
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // filter todos array based on the condition that is todo.id is not equal to "id" so that we – note that the second "id" is used in TodoItem.js where the item's actual id has been passed in.
    setTodos(updatedTodos);
    // updates
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
    <>
      <div className="container">
        <br></br>
        <br></br>
        <h1>{title}</h1>
        <span>Remove List</span>
        <span onClick={() => deleteTodoPage(id)} className="todo-item__delete">
          x
        </span>
        <div>
          <TodoForm addTodo={addTodo}></TodoForm>
        </div>

        <div>{displayTodos()}</div>
      </div>
    </>
  );
};

export default TodoList;
