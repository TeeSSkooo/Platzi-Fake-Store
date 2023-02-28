import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from 'types/User';

const initialState: User = {
  email: '',
  id: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.email = '';
      state.id = '';
      state.token = '';
    },
  },
});

export default userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
