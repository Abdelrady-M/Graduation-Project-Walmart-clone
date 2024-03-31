import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";

// ====================  ====================
export const categoryAction = createAsyncThunk(
    "categories/getAll",
    async () => {
        const res = await instance.get(`/categories/`);
        return res.data.data;
    }
);

const categorySlice = createSlice({
    name: "categories",
    initialState: { categories: [] },
    extraReducers: (builder) => {
        builder.addCase(categoryAction.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    },
});

export default categorySlice.reducer;
