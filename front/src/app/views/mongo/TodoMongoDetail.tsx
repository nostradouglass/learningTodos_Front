import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import BackButton from "../../components/backButton";
import firebase from "firebase/app";
import "firebase/auth";

const TodoMongoDetail = () => {
  let { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(FETCH_SINGLE_TODO, {
    variables: { id: id },
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      setIsLoggedIn(true);
    } else {
      // No user is signed in.
      setIsLoggedIn(false);
    }
  });

  const showDoneCheck = () => {
    if (data.todo.completed) {
      return <i className="material-icons right light-blue-text">done_outline</i>
    } else {
      return <div></div>
    }
  }

    if (loading || !isLoggedIn) {
        return <div className="white-text">Loading...</div>;
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
                    <div className="right">
                      <p>Percent Complete: {data.todo.percentComplete}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BackButton backTo="mongo" />
          </div>
        );
  };
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
`;

export default TodoMongoDetail;
