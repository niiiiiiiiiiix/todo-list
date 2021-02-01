import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: "Buy Milk", isDone: false },
        { name: "Do push up", isDone: true },
      ],
    };
  }

  displayTodos() {
    return this.state.todos.map((todo) => (
      <div>
        {/* <span>{todo.name}</span>
        <span>{todo.isDone ? " - completed" : " - not completed"}</span> */}
        <TodoItem name={todo.name} isDone={todo.isDone} />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>Todolist</div>
        <div>{this.displayTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
