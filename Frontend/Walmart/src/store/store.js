import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import authReducer from "./slices/authSlice";
import logReducer from "./slices/authLogin";
import cartReducer from "./slices/cart";

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    login: logReducer,
    cart: cartReducer,
  },
});

export default store;
