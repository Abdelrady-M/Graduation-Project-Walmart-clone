import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product"
import authReducer from './slices/authSlice'
import logReducer from './slices/authLogin'

const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
        login: logReducer
    },
});

export default store;