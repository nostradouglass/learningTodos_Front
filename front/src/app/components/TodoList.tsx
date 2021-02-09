import React from "react";
import { Link } from 'react-router-dom'

const TodoList = () => {
  return (
    <ul className="collection with-header ">
      <li className="collection-header light-blue white-text">
        <h4>Topic <span className="right">completed</span></h4>
       
      </li>
      <li className="collection-item light-blue-text">
        <Link to={`/todoDetail:id`} >Todo Item 1</Link>
        <span className="material-icons right">check_box_outline_blank</span>
      </li>
      <li className="collection-item light-blue-text">
      <Link to={`/todoDetail:id`}>Todo Item 2</Link>
      <span className="material-icons right">check_box</span>
      </li>
    </ul>
  );
};

export default TodoList;
