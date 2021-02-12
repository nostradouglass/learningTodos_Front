import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TodoMongoList from "./TodoMongoList";
import firebase from "firebase/app";
import "firebase/auth";

const TodoMongo = () => {
  const [selectedButton, setSelectedButton] = useState("inProgress");
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

  const inProgressClicked = () => {
    setSelectedButton("inProgress");
  };

  const completedClicked = () => {
    setSelectedButton("completed");
  };
  const allClicked = () => {
    setSelectedButton("all");
  };

  const setButtonCss = (buttonType: string) => {
    return selectedButton == buttonType
      ? "waves-effect waves-light btn-small blue darken-2"
      : "waves-effect waves-light btn-small light-blue";
  };

  const setButtonClass = (buttonType: string) => {
    switch (buttonType) {
      case "all":
        return setButtonCss("all");
      case "inProgress":
        return setButtonCss("inProgress");
      case "completed":
        return setButtonCss("completed");
    }
  };

  if (!isLoggedIn) {
    return <div className="white-text">Please log in</div>;
  } else {
    return (
      <div>
        <div className="container">
          <div className="row listHeader">
            <div className="col s7">
              <h4 className="light-blue-text listHeaderText">Todo Mongo</h4>
            </div>
            <div className="listSelectionTypes right">
              <a
                onClick={() => inProgressClicked()}
                className={setButtonClass("inProgress")}
              >
                in progress
              </a>
              <a
                onClick={() => completedClicked()}
                className={setButtonClass("completed")}
              >
                completed
              </a>
              <a onClick={() => allClicked()} className={setButtonClass("all")}>
                All
              </a>
            </div>
          </div>

          <TodoMongoList typeToShow={selectedButton} />

          <Link
            to="/newMongoTodo"
            className="btn-floating btn-large waves-effect waves-light light-blue right"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
        {/* For testing firebase log in out system */}
        {/* <button
          onClick={() => {
            firebase.auth().signOut;
            console.log("sign out");
          }}
        >
          logout temp
        </button> */}
      </div>
    );
  }
};

export default TodoMongo;
