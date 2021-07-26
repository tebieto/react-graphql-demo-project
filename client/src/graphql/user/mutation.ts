import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation Register($email: String!, $full_name: String!, $password: String!) {
    register(email: $email, password: $password, full_name: $full_name) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($email: String!) {
    resetPassword(email: $email)
  }
`;

export const RESET_CHANGE_PASSWORD = gql`
  mutation ChangePasswordAfterReset(
    $email: String!
    $password: String!
    $token: String!
  ) {
    changePasswordAfterReset(email: $email, password: $password, token: $token)
  }
`;
