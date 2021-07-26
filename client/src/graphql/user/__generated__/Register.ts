/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "User";
  id: string | null;
}

export interface Register {
  register: Register_register | null;
}

export interface RegisterVariables {
  email: string;
  full_name: string;
  password: string;
}
