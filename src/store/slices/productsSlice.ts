import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: '',
  activeProduct: '',
  minPriceFilter: '',
  maxPriceFilter: '',
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
    setMinimumPrice(state, action: PayloadAction<string>) {
      state.minPriceFilter = action.payload;
    },
    setMaximumPrice(state, action: PayloadAction<string>) {
      state.maxPriceFilter = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { setActiveCategory, setActiveProduct, setMinimumPrice, setMaximumPrice } = productsSlice.actions;
