import gql from "graphql-tag";


export default gql`
  mutation AddTodo($todoItem: String) {
    addTodo(todoItem: $todoItem) {
      id
    }
  }
`;
