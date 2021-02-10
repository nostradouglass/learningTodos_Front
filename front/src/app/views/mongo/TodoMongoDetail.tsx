import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client'
import BackButton from '../../components/backButton'

const TodoMongoDetail = () => {
  let { id } = useParams<{ id: string }>();
  
  const { loading, error, data } = useQuery(FETCH_SINGLE_TODO, { variables: {id: id}});

const showDoneCheck = () => {
  if (data.todo.completed) {
    return <i className="material-icons right light-blue-text">done_outline</i>
  } else {
    return <div></div>
  }
}

  if (loading) {
    return <div>Loading...</div>
  } else {
  return (
    <div className="container">
  <h4 className="light-blue-text">Todo Mongo Detail</h4>

  <div className="col s12 m7">
    <h2 className="header light-blue-text">{data.todo.todoItem}</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src="http://lorempixel.com/100/190/nature" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span>Notes: {data.todo.notes}</span>
          {showDoneCheck()}
        </div>
        <div className="card-action">
          <a href="#">Add Link to the page for this topic</a>
          <div className="right"><p>Percent Complete: {data.todo.percentComplete}</p></div>
        </div>
      </div>
    </div>
  </div>
  <BackButton backTo="mongo" />
  </div>
  )
  }
};

const FETCH_SINGLE_TODO = gql`
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
