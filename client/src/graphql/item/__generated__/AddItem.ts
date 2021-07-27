/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddItem
// ====================================================

export interface AddItem_addItem_creator {
  __typename: "User";
  full_name: string | null;
}

export interface AddItem_addItem {
  __typename: "Item";
  id: string | null;
  title: string | null;
  creator: AddItem_addItem_creator | null;
  createdAt: string | null;
}

export interface AddItem {
  addItem: AddItem_addItem | null;
}

export interface AddItemVariables {
  title: string;
}
