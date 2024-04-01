import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";

export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/cart");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ prdId, quantity }, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/cart/${prdId}`, { quantity });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const modifyOneProduct = createAsyncThunk(
  "cart/modifyOneProduct",
  async ({ rejectWithValue }) => {
    try {
      const response = await instance.patch(`/cart`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeOneProduct = createAsyncThunk(
  "cart/removeOneProduct",
  async (prdId, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/cart/${prdId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload;
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //add to cart handling
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartData = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Modify one product
      .addCase(modifyOneProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(modifyOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update cartData with the modified product
        if (state.cartData) {
          state.cartData = action.payload;
        }
      })
      .addCase(modifyOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Remove one product
      .addCase(removeOneProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // Update cartData by removing the product
        if (state.cartData) {
          state.cartData = action.payload;
        }
      })
      .addCase(removeOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
