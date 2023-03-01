import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { setActiveCategory } = productsSlice.actions;
