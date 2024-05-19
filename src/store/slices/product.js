import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";


export const fetchProducts = createAsyncThunk(
    "products/getAll",
    async (currentPage) => {
        var res = await instance.get(`/product?page=${currentPage}`);
        return res.data.data;
    })


const productsSlice = createSlice({
    name: "products",
    initialState: { products: [] },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
});

export default productsSlice.reducer;
