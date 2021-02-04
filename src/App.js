import "./App.css";
import Todolist from "./components/TodoList";
import TodoPageForm from "./components/TodoPageForm";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoPages, setTodoPages] = useState([
    {
      id: uuidv4(),
      title: "First",
    },
  ]);

  const addTodoPage = (title) => {
    if (title.trim() === "") return;

    const newTodoPage = {
      id: uuidv4(),
      title,
      isDone: false,
    };

    setTodoPages([...todoPages, newTodoPage]);
  };

  const deleteTodoPage = (id) => {
    const updatedTodoPages = todoPages.filter((todoPage) => todoPage.id !== id);
    setTodoPages(updatedTodoPages);
    // updates
  };

  return (
    <div>
      <TodoPageForm addTodoPage={addTodoPage} />
      {/* <Todolist title="Hello" /> */}
      {todoPages.map((todoList) => (
        <Todolist
          title={todoList.title}
          id={todoList.id}
          deleteTodoPage={deleteTodoPage}
        />
      ))}
    </div>
  );
}

export default App;
