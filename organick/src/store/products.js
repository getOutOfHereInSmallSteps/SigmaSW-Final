import { createSlice } from '@reduxjs/toolkit';

const initialProducts = { list: [], top: [] };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;
      state.top = action.payload.slice(0, 4);
    },
  },
});

export default productsSlice;
