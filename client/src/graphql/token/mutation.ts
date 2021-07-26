import { gql } from '@apollo/client';

export const VALIDATE_RESET_PASSWORD_TOKEN = gql`
  mutation ValidateResetPasswordToken(
    $email: String!
    $password: String!
    $token: String!
  ) {
    validateResetPasswordToken(
      email: $email
      password: $password
      token: $token
    ) {
      email
    }
  }
`;
