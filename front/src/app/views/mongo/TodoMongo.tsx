import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoMongoList from "./TodoMongoList";

import BackButton from '../../components/backButton'

const TodoMongo = () => {
  const [selectedButton, setSelectedButton] = useState("inProgress");

  const inProgressClicked = () => {
    setSelectedButton("inProgress");
  };

  const completedClicked = () => {
    setSelectedButton("completed");
  };
  const allClicked = () => {
    setSelectedButton("all");
  };

  const setButtonClass = (buttonType: string) => {
    switch (buttonType) {
      case "all":
        return selectedButton == "all"
          ? "waves-effect waves-light btn-small blue darken-2"
          : "waves-effect waves-light btn-small light-blue";
      case "inProgress":
        return selectedButton == "inProgress"
          ? "waves-effect waves-light btn-small blue darken-2"
          : "waves-effect waves-light btn-small light-blue";
      case "completed":
        return selectedButton == "completed"
          ? "waves-effect waves-light btn-small blue darken-2"
          : "waves-effect waves-light btn-small light-blue";
    }
  };

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
    </div>
  );
};

export default TodoMongo;
