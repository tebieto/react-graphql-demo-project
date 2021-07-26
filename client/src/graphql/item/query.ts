import { gql } from '@apollo/client';

export const GET_ITEM = gql`
  query GetItems {
    getItems {
      id
      title
      creator {
        id
        full_name
        email
      }
      createdAt
    }
  }
`;
