import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddItem_addItem } from '../../graphql/item/__generated__/AddItem';
import { GetItems_getItems } from '../../graphql/item/__generated__/GetItems';
import { RootState } from '../store';

interface ItemState {
  items: AddItem_addItem[] | GetItems_getItems[];
}

const initialState: ItemState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<GetItems_getItems[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<AddItem_addItem>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addItems, addItem } = itemSlice.actions;

export const selectItems = (state: RootState): AddItem_addItem[] =>
  state.itemReducer.items as AddItem_addItem[];

const itemReducer = itemSlice.reducer;

export default itemReducer;
