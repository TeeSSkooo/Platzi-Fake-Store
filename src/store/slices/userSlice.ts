import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from 'types/User';

const initialState: User = {
  email: '',
  id: '',
  token: '',
  createdAt: '',
  lastSignIn: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.createdAt = action.payload.createdAt;
      state.lastSignIn = action.payload.lastSignIn;
    },
    removeUser(state) {
      state.email = '';
      state.id = '';
      state.token = '';
      state.createdAt = '';
      state.lastSignIn = '';
    },
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
