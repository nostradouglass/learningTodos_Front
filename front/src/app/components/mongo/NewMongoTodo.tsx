import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import { gql, useMutation } from "@apollo/client";

const NewMongoTodo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [percentComplete, setPercentComplete] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [notes, setNotes] = useState("");
  const [ redirect, setRedirect ] = useState(false)

  const [addTodo, { data }] = useMutation(ADD_TODO);

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
   
    addTodo({
      variables: {
        todoItem: todoItem,
        percentComplete: percentComplete,
        completed: completed,
        notes: notes,
      },
    }).then(() => setRedirect(true))
  };
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
                <h5 className="right grey-text lighten-3">{percentComplete}</h5>
                <p className="range-field">
                  <input className="slider"
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
             
              <input type="submit" value="Submit Todo" className="waves-effect waves-light btn-large light-blue submitButton" />
              
              
            </div>
          </div>
        </form>
      </div>
    </div>
  ) } else {
    return <Redirect to="/mongo"/>
  }
};

const ADD_TODO = gql`
  mutation AddTodo(
    $todoItem: String
    $completed: Boolean
    $percentComplete: Int
    $notes: String
  ) {
    addTodo(
      todoItem: $todoItem
      completed: $completed
      percentComplete: $percentComplete
      notes: $notes
    ) {
      id
      todoItem
      percentComplete
      notes
    }
  }
`;

export default NewMongoTodo;
