import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import { gql, useQuery } from "@apollo/client";
import { FETCH_TODOS } from "../../queries/fetchTodos";

type listProps = {
  typeToShow: string;
};

const TodoMongoList = ({ typeToShow }: listProps) => {
  const { loading, error, data } = useQuery(FETCH_TODOS);

  const mapTodosList = () => {
    if (loading) {
      return <div>'Loading'</div>;
    } else {
      interface todoType {
        id: string;
        todoItem: string;
        completed: boolean;
        percentCompleted: number;
      }

      return data.todos.map((todo: todoType) => {
        switch (typeToShow) {
          case "all":
            return (
              <ListItem
                key={todo.id}
                id={todo.id}
                todoItem={todo.todoItem}
                completed={todo.completed}
                percentCompleted={todo.percentCompleted}
              />
            );
          case "completed":
            return todo.completed == true ? (
              <ListItem
                key={todo.id}
                id={todo.id}
                todoItem={todo.todoItem}
                completed={todo.completed}
                percentCompleted={todo.percentCompleted}
              />
            ) : (
              <div key={todo.id}></div>
            );
          case "inProgress":
            return todo.completed == false ? (
              <ListItem
                key={todo.id}
                id={todo.id}
                todoItem={todo.todoItem}
                completed={todo.completed}
                percentCompleted={todo.percentCompleted}
              />
            ) : (
              <div key={todo.id}></div>
            );
        }
      });
    }
  };
  if (data) {
    return (
      <ul className="collection with-header ">
        <li className="collection-header light-blue white-text">
          <div className="row listSubheaderText">
            <div className="col s10">
              <h4>Topic</h4>
            </div>
            <div className="col s1 statusText">
              <h5 className="">status</h5>
            </div>
            <div className="col s1 statusText">
              <h5>remove</h5>
            </div>
          </div>
        </li>
        {mapTodosList()}
      </ul>
    );
  } else {
    return (
      <div className="white-text">
        <h3>Loading...</h3>
      </div>
    );
  }
};

export default TodoMongoList;
