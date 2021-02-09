import React from "react";
import TodoList from "../mongo/TodoMongoList";

const TodoPostgres = () => {
  return (
    <div>
      <div className="container">
        <h4 className="light-blue-text">Todo Postgres</h4>
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPostgres;
