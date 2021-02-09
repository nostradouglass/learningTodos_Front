import React, { ReactInstance } from "react";
import { Link } from "react-router-dom";

interface PropsType {
  id: string;
  todoItem: string;
  isCompleted: boolean;
}

const ListItem = ({ id, todoItem, isCompleted }: PropsType) => {
  return (
    <li className="collection-item light-blue-text">
      <Link to={`/todoMongoDetail/${id}`}>{todoItem}</Link>
      <span className="material-icons right">
        {isCompleted ? "check_box" : "check_box_outline_blank"}
      </span>
    </li>
  );
};

export default ListItem;
