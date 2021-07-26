import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ItemState {
  items: string[];
}

const initialState: ItemState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addItems, addItem } = itemSlice.actions;

export const selectItems = (state: RootState): string[] =>
  state.itemReducer.items;

export default itemSlice.reducer;
