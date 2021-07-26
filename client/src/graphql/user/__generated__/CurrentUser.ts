/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_currentUser {
  __typename: "User";
  id: string | null;
  full_name: string | null;
  email: string | null;
}

export interface CurrentUser {
  currentUser: CurrentUser_currentUser | null;
}
