import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartCounterValue = { value: 0 };
const initialCartState = [];

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
  reducers: {},
});

const store = configureStore({
  reducer: {
    cartCounter: cartCounterSlice.reducer,
  },
});

export const { increaseCartCounter, decreaseCartCounter, clearCartCounter } =
  cartCounterSlice.actions;

export default store;
