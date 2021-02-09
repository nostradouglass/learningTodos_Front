import { gql } from '@apollo/client'


export const fetchTodos = gql`
{
  todos {
    id
    todoItem
    completed
    percentComplete
    notes
  }
}
`;