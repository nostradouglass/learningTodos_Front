import React from "react";
import TodoList from "./TodoList";

const TodoMain = () => {
  return (
    <div>
      <div className="container">
        <h4 className="light-blue-text">Todo Main</h4>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoMain;
