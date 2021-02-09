import React, { ReactInstance } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from '@apollo/client'

interface PropsType {
  id: string;
  todoItem: string;
  completed: boolean;
}

const ListItem = ({ id, todoItem, completed }: PropsType) => {

  const [changeCompleted, { data }] = useMutation(ChangeCompleted);

  return (
    <li className="collection-item light-blue-text">
      <Link to={`/todoMongoDetail/${id}`}>{todoItem}</Link>
      <span onClick={() => changeCompleted({ variables: {id: id, completed: !completed }} ) }  className="material-icons right checkBox">
        {completed ? "check_box" : "check_box_outline_blank"}
      </span>
    </li>
  );
};

const ChangeCompleted = gql`
mutation ChangeCompleted($id: ID, $completed:Boolean){
  changeCompleted(id: $id, completed:$completed ) {
    id
    completed
  }
}
`


export default  ListItem;
