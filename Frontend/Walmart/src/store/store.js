import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
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
=======
import productReducer from "./slices/product"
import authReducer from './slices/authSlice'
import logReducer from './slices/authLogin'
import subCategoriesReducer from "./slices/subcategory"
import categoryReducer from "./slices/categories"
import cartReducer from "./slices/cart"
import wishListReducer from "./slices/wishList"
import oneOrderSlice from "./slices/order";


const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
        login: logReducer,
        subCategories: subCategoriesReducer,
        categories: categoryReducer,
        cart: cartReducer,
        wishList: wishListReducer,
        oneOrder: oneOrderSlice,
    },
>>>>>>> origin/main
});

export default store;
