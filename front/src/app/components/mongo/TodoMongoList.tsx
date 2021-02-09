import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItem from '../ListItem'

const TodoMongoList = () => {

  return (
    <ul className="collection with-header ">
      <li className="collection-header light-blue white-text">
        <h4>
          Topic <span className="right">completed</span>
        </h4>
      </li>
      <ListItem id="1" todoItem="TodoItem 1" isCompleted={true} />
      <ListItem id="2" todoItem="TodoItem 2" isCompleted={false} />
    </ul>
  );
};

export default TodoMongoList;
