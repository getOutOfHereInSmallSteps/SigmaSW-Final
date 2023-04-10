import { createSlice } from '@reduxjs/toolkit';

// const initialProducts = { list: [], top: [] };
const initialProducts = { pages: {} };

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    setProducts(state, action) {
      // state.list = action.payload;
      // state.top = action.payload.slice(0, 4);
      state.pages[action.payload.id] = action.payload.products;
    },
  },
});

export default productsSlice;
