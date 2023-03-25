import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialValue = { value: 0 };

const cartCounterSlice = createSlice({
  name: 'cartCounter',
  initialState: initialValue,
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

const store = configureStore({
  reducer: {
    cartCounter: cartCounterSlice.reducer,
  },
});

export const { increaseCartCounter, decreaseCartCounter, clearCartCounter } =
  cartCounterSlice.actions;

export default store;
