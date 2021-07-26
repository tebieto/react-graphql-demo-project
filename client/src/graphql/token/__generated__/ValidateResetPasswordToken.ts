/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ValidateResetPasswordToken
// ====================================================

export interface ValidateResetPasswordToken_validateResetPasswordToken {
  __typename: "Token";
  email: string | null;
}

export interface ValidateResetPasswordToken {
  validateResetPasswordToken: ValidateResetPasswordToken_validateResetPasswordToken | null;
}

export interface ValidateResetPasswordTokenVariables {
  email: string;
  password: string;
  token: string;
}
