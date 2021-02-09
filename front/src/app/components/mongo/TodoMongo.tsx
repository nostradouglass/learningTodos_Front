import React from "react";
import { Link } from "react-router-dom";
import TodoMongoList from "./TodoMongoList";

const TodoMongo = () => {
  return (
    <div>
      <div className="container">
        <h4 className="light-blue-text">Todo Mongo</h4>
        <TodoMongoList />
        <Link
          to="/newMongoTodo"
          className="btn-floating btn-large waves-effect waves-light light-blue right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default TodoMongo;
