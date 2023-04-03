import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './products';
import cartSlice from './cart';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export const { setProducts } = productsSlice.actions;

export default store;
