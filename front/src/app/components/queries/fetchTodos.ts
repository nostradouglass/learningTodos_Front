import { gql } from '@apollo/client'


export const FETCH_TODOS = gql`
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