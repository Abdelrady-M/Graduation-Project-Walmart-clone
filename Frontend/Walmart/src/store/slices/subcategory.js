import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/instance";
export var subCategoryAction = createAsyncThunk(
    "subCategories/getAll",
    async (currentPage2) => {
        var res = await instance.get(`/subcategories?page=${currentPage2}`);
        return res.data.data;
    }
);

var subCategories = createSlice({
    name: "subCategories",
    initialState: { subCategories: [] },
    extraReducers: (builder) => {
        builder.addCase(subCategoryAction.fulfilled, (state, action) => {
            state.subCategories = action.payload;
        });
    },
});

export default subCategories.reducer;
