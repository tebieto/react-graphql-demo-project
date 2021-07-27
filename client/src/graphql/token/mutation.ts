import { gql } from '@apollo/client';

export const VALIDATE_RESET_PASSWORD_TOKEN = gql`
  mutation ValidateResetPasswordToken($email: String!, $token: String!) {
    validateResetPasswordToken(email: $email, token: $token) {
      email
    }
  }
`;
