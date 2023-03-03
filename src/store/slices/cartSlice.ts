import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Product from 'types/Product';

const initialState = {
  showCart: false,
  cartProducts: [] as Product[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<Product>) {
      state.cartProducts.push(action.payload);
      console.log(state.cartProducts);
    },
    removeProductFromCart(state, action: PayloadAction<Product>) {
      state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id);
    },
    openCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
  },
});

export default cartSlice.reducer;

export const { addProductToCart, removeProductFromCart, openCart, closeCart } = cartSlice.actions;
