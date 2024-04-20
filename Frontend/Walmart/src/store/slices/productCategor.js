import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";


export const fetchProductsCat = createAsyncThunk(
    "products/getAll",
    async ( CategoryName ) => {
        var res = await instance.get(`/product/category/${CategoryName}`);
        return res.data.data;
    })


const productsCatSlice = createSlice({
    name: "productsCat",
    initialState: { productsCat: [] },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsCat.fulfilled, (state, action) => {
            state.productsCat = action.payload;
        });
    },
});

export default productsCatSlice.reducer;
