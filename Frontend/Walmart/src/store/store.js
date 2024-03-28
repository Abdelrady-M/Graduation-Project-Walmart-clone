import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import productReducer from "./slices/product";
import cartReducer from "./slices/cart";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
=======
import productReducer from "./slices/product"
import authReducer from './slices/authSlice'
import logReducer from './slices/authLogin'

const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
        login: logReducer
    },
>>>>>>> origin/main
});

export default store;
