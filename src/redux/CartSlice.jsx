// src/features/cart/cartSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({...item, quantity: 1}); // Add new item with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      // const existingItem = state.items.find(i => i.id === itemId);
      state.items = state.items.filter(i => i.id !== itemId);
    },
    increaseQuantity: (state, action) => {
      const ItemId = action.payload;
      const existingItem = state.items.find(item => item.id === ItemId);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const ItemId = action.payload;
      const existingItem = state.items.find(item => item.id === ItemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
