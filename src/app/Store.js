import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../future/shopCart/prodectSlice";
import cartReducer from "../future/shopCart/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
