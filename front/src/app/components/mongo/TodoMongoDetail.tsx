import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client'

const TodoMongoDetail = () => {
  let { id } = useParams<{ id: string }>();
  
  const { loading, error, data } = useQuery(fetchSingleTodo, { variables: {id: id}});

  if (loading) {
    return <div>Loading...</div>
  } else {
  return (
    <div className="container">
  <h4 className="light-blue-text">Todo Mongo Detail</h4>
  <h5 className="light-blue-text">{data.todo.todoItem}</h5>
  </div>
  )
  }
};

const fetchSingleTodo = gql`
query FetchSingleTodo($id: String) {
    todo(id: $id) {
      id
      todoItem
      completed
      percentComplete
      notes
    }
  }
`


export default TodoMongoDetail;
