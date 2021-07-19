import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductsState {
  cart: Record<string, number>
}

const initialState: ProductsState = {
  cart: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<string>) => {
      state.cart[action.payload] = (state.cart[action.payload] || 0) + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart } = productsSlice.actions;

export default productsSlice.reducer;
