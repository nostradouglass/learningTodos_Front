import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "../ListItem";
import { gql, useQuery } from "@apollo/client";
import { fetchTodos } from "../queries/fetchTodos";

const TodoMongoList = () => {
  const { loading, error, data } = useQuery(fetchTodos);

  const mapTodosList = () => {
    if (loading) {
      return <div>'Loading'</div>;
    } else {
      interface todoType {
        id: string;
        todoItem: string;
        completed: boolean;
      }

      return data.todos.map((todo: todoType) => {
        return (
          <ListItem
            key={todo.id}
            id={todo.id}
            todoItem={todo.todoItem}
            completed={todo.completed}
          />
        );
      });
    }
  };

  return (
    <ul className="collection with-header ">
      <li className="collection-header light-blue white-text">
        <h4>
          Topic <span className="right">completed</span>
        </h4>
      </li>
      {mapTodosList()}
    </ul>
  );
};

export default TodoMongoList;
