import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartState = { products: [], productsQuantity: 0 };

/*
const initialCartState = [
  {
    name: 'Health Pustachios',
    price: 20,
    discount: 7,
    quantity: 2,
    id: p2,
  },
];

*/

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.products.findIndex(
        item => item.id === action.payload.id
      );
      state.productsQuantity += action.payload.quantity;
      if (itemIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeItemFromCart(state, action) {
      state.productsQuantity -= action.payload.quantity;
      state.products = state.products.filter(
        item => item.id !== action.payload.id
      );
    },
    setCartItemQuantity(state, action) {
      const itemIndex = state.products.findIndex(
        item => item.id === action.payload.id
      );
      state.products[itemIndex].quantity = action.payload.quantity;
      state.productsQuantity = state.products.reduce(
        (acc, cur) => (acc += cur.quantity),
        0
      );
    },
    clearCart(state) {
      state.products = [];
      state.productsQuantity = 0;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default store;
