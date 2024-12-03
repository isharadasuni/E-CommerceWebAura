import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  resetCount: false, // flag to reset the count when navigating to the cart page
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex >= 0) {
        state.items[existingProductIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Reset the count when navigating to the cart page
    resetCartCount: (state) => {
      state.resetCount = true;
    },

    // Set flag back to false after the cart count is reset
    resetCountComplete: (state) => {
      state.resetCount = false;
    },
  },
});

export const { addToCart, removeFromCart, resetCartCount, resetCountComplete } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;

// This selector computes the total count of items in the cart unless resetCount is true
export const selectCartCount = (state) => {
  if (state.cart.resetCount) {
    return 0; // return 0 when resetting the count
  }
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export default cartSlice.reducer;
