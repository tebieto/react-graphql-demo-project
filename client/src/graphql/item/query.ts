import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query GetItems {
    getItems {
      id
      title
      creator {
        full_name
      }
      createdAt
    }
  }
`;
