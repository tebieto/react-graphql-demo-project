/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetItems
// ====================================================

export interface GetItems_getItems_creator {
  __typename: "User";
  id: string | null;
  full_name: string | null;
  email: string | null;
}

export interface GetItems_getItems {
  __typename: "Item";
  id: string | null;
  title: string | null;
  creator: GetItems_getItems_creator | null;
  createdAt: string | null;
}

export interface GetItems {
  getItems: (GetItems_getItems | null)[] | null;
}
