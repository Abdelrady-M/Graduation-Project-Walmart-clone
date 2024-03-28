import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    // Declare the type your function argument here:
    async (_, { rejectWithValue }) => {
        try {
            const response = await instance.get('/product')
            // console.log("API Response:", response.data.data);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    })


const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default productsSlice.reducer;
