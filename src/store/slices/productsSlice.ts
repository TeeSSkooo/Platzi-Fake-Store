import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: '',
  activeProduct: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setActiveProduct(state, action: PayloadAction<string>) {
      state.activeProduct = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { setActiveCategory, setActiveProduct } = productsSlice.actions;
