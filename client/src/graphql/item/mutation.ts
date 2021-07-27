import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
  mutation AddItem($title: String!) {
    addItem(title: $title) {
      id
      title
      creator {
        full_name
      }
      createdAt
    }
  }
`;
