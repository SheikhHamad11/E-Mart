// src/features/wishlist/wishlistSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [], // This will store the wishlist items
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        // Remove item from wishlist if it's already in the wishlist
        state.items = state.items.filter(i => i.id !== item.id);
        console.log('item removed');
      } else {
        // Add item to wishlist if it's not already there
        state.items.push(item);
        console.log('item added');
      }
    },
  },
});

export const {toggleWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
