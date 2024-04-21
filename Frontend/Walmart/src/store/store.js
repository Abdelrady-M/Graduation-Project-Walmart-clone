import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product"
import productCatReducer from "./slices/productCategor"
import authReducer from './slices/authSlice'
import logReducer from './slices/authLogin'
import subCategoriesReducer from "./slices/subcategory"
import categoryReducer from "./slices/categories"
import cartReducer from "./slices/cart"
import wishListReducer from "./slices/wishList"
import oneOrderSlice from "./slices/order";
import checkOutReducer from "./slices/checkOut"
import userReducer from './slices/user'
import addressReducer from "./slices/userAddress"
import ordersReducer from './slices/orders'

const store = configureStore({
    reducer: {
        products: productReducer,
        productsCat: productCatReducer,
        auth: authReducer,
        login: logReducer,
        subCategories: subCategoriesReducer,
        categories: categoryReducer,
        cart: cartReducer,
        wishList: wishListReducer,
        oneOrder: oneOrderSlice,
        checkOut: checkOutReducer,
        user: userReducer,
        address : addressReducer,
        orders : ordersReducer,
    },

});

export default store;
