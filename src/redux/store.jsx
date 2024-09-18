// src/app/store.js
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../redux/CartSlice';
import wishlistReducer from '../redux/WishlistSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishlistReducer,
  },
});
