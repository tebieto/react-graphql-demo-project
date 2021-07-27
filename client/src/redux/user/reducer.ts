import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
  authenticated: string | null;
}

const initialState: UserState = {
  authenticated: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authenticateUser: (state, action: PayloadAction<string>) => {
      state.authenticated = action.payload;
    },
    logUserOut: (state) => {
      state.authenticated = null;
    },
  },
});

export const { authenticateUser, logUserOut } = userSlice.actions;

export const selectUser = (state: RootState): string | null =>
  state.userReducer.authenticated;

const userReducer = userSlice.reducer;
export default userReducer;
