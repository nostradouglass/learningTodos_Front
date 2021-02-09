import React from "react";
import { useParams } from "react-router-dom";

const TodoMongoDetail = () => {
  let { id } = useParams<{ id: string }>();

  return (
    <div className="container">
  <h4 className="light-blue-text">Todo Mongo Detail {id}</h4>
  </div>
  )
};

export default TodoMongoDetail;
