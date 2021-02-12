import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import BackButton from "../../components/backButton";
import firebase from "firebase/app";
import "firebase/auth";

const NewMongoTodo = () => {
  const [todoItem, setTodoItem] = useState(""); 
  const [percentComplete, setPercentComplete] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [notes, setNotes] = useState("");
  const [redirect, setRedirect] = useState(false); // set to true to redirect to another page. 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // use with firebase
  const [addTodo, { data }] = useMutation(ADD_TODO); 
  const [officialTechName, setOfficialTechName] = useState("")
  const [ websiteUrl, setWebsiteUrl] = useState("")

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

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    addTodo({
      variables: {
        todoItem: todoItem,
        percentComplete: percentComplete,
        completed: completed,
        notes: notes,
        officalTechName: officialTechName,
        websiteUrl: websiteUrl
      },
    }).then(() => setRedirect(true));
  };

  if (isLoggedIn) {
    if (!redirect) {
      return (
        <div className="container">
          <h3 className="light-blue-text title">Create new Todo Item</h3>
          <div className="row">
            <form onSubmit={formSubmitHandler} className="col s12 ">
              <div className="row">
                <div className="input-field col s6 white newTodoFormBackground">
                  <div>
                    <label>Enter item to learn</label>
                    <input
                      value={todoItem}
                      onChange={(e) => setTodoItem(e.target.value)}
                      placeholder="ex. react, webpack, express, etc"
                      type="text"
                      className="validate "
                    />
                  </div>
                  <br />
                  <div>
                    <p className="grey-text lighten-3 left">Percent Complete</p>
                    <h5 className="right grey-text lighten-3">
                      {percentComplete}
                    </h5>
                    <p className="range-field">
                      <input
                        className="slider"
                        onChange={(e) => {
                          setPercentComplete(parseInt(e.target.value));
                          if (parseInt(e.target.value) == 100) {
                            setCompleted(true);
                          } else {
                            setCompleted(false);
                          }
                        }}
                        type="range"
                        min="0"
                        max="100"
                        value={percentComplete}
                      />
                    </p>
                  </div>
                  <br />
                  <p>
                    <label>
                      <input
                        onChange={() => setCompleted(!completed)}
                        type="checkbox"
                        className="filled-in"
                        checked={completed}
                      />
                      <span>Completed</span>
                    </label>
                  </p>
                  <br />

                  <div className="input-field col s12">
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      id="textarea1"
                      className="materialize-textarea"
                    ></textarea>
                    <label htmlFor="textarea1">Notes</label>
                  </div>

                  <input
                    type="submit"
                    value="Submit Todo"
                    className="waves-effect waves-light btn-large light-blue submitButton"
                  />
                </div>
              </div>
            </form>
          </div>
          <BackButton backTo="mongo" />
        </div>
      );
    } else {
      return <Redirect to="/mongo" />;
    }
  } else {
    return <div className="white-text">Please log in</div>;
  }
};

const ADD_TODO = gql`
  mutation AddTodo(
    $todoItem: String
    $completed: Boolean
    $percentComplete: Int
    $notes: String
    $officalTechName: String
    $websiteUrl: String
  ) {
    addTodo(
      todoItem: $todoItem
      completed: $completed
      percentComplete: $percentComplete
      notes: $notes
      officalTechName: $officalTechName
 
    websiteUrl: $websiteUrl
    ) {
      id
      todoItem
      percentComplete
      notes
      officalTechName
    websiteUrl
    }
  }
`;

export default NewMongoTodo;
