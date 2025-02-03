import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../future/shopCart/prodectSlice';
export const store = configureStore({
    reducer:{
        products:productReducer
    }
})