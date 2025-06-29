// redux/UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  email: "",
  role: "",
  isLoggedIn: false,
  wishlist: [],
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { userId, email, role } = action.payload;
      state.userId = userId;
      state.email = email;
      state.role = role;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.userId = null;
      state.email = "";
      state.role = "";
      state.isLoggedIn = false;
      state.wishlist = [];
      state.cart = [];
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item !== action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  clearCart,
} = userSlice.actions;

export default userSlice.reducer;
