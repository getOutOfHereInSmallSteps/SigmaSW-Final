import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartCounterValue = { value: 0 };
const initialCartState = [];

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

const cartCounterSlice = createSlice({
  name: 'cartCounter',
  initialState: initialCartCounterValue,
  reducers: {
    increaseCartCounter(state, action) {
      state.value += action.payload;
    },
    decreaseCartCounter(state, action) {
      state.value -= action.payload;
    },
    clearCartCounter(state) {
      state.value = 0;
    },
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      console.log(itemIndex);
      console.log(!-1);
      if (itemIndex === -1) {
        state.push(action.payload);
      } else {
        state[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeItemFromCart(state, action) {
      state.filter(item => item.id !== action.payload.id);
    },
    setCartItemQuantity(state, action) {
      const itemIndex = state.filter(item => item.id === action.payload.id);
      state[itemIndex].quantity = action.payload.quantity;
    },
    clearCart(state, action) {
      state = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    cartCounter: cartCounterSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const { increaseCartCounter, decreaseCartCounter, clearCartCounter } =
  cartCounterSlice.actions;

export const {
  addItemToCart,
  removeItemFromCart,
  setCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default store;
