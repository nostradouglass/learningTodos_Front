import React from "react";

import {gql, useMutation} from '@apollo/client'

const NewMongoTodo = () => {
  return (
    <div className="container">
      <h4 className="light-blue-text">New Mongo Todo</h4>
    </div>
  );
};


const mutation = gql`
  mutation AddTodo($todoItem: String) {
    addTodo(todoItem: $todoItem) {
      id
    }
  }
`;


export default NewMongoTodo
