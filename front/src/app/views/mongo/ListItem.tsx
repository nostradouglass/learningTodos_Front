import React, { ReactInstance } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import {FETCH_TODOS} from '../../queries/fetchTodos'

interface PropsType {
  id: string;
  todoItem: string;
  completed: boolean;
  percentCompleted: number;
}

const ListItem = ({ id, todoItem, completed }: PropsType) => {
  const [changeCompleted] = useMutation(CHANGE_COMPLETED);
  const [removeTodo] = useMutation(REMOVE_TODO, {refetchQueries: [{query: FETCH_TODOS}]});

  return (
    <li className="collection-item light-blue-text">
      <div className="row todoRow">
        <div className="col s10">
          <Link to={`/todoMongoDetail/${id}`}>
            <h6>{todoItem}</h6>
          </Link>
        </div>
        <div className="col s1">
          <div
            onClick={() =>
              changeCompleted({ variables: { id: id, completed: !completed } })
            }
            className="material-icons right checkBox center-align checkBox"
          >
            {completed ? "check_box" : "check_box_outline_blank"}
          </div>
        </div>
        <div className="col s1">
          <div
            onClick={() => {
              removeTodo({ variables: { id: id } });
            }}
          >
            <i className="material-icons small red-text deleteIcon">delete</i>
          </div>
        </div>
      </div>
    </li>
  );
};

// Change the status of a todo to be completed or not.
const CHANGE_COMPLETED = gql`
  mutation ChangeCompleted($id: ID, $completed: Boolean) {
    changeCompleted(id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

// Remove todo Item
const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID) {
    removedTodo(id: $id) {
      id
      todoItem
    }
  }
`;

export default ListItem;
