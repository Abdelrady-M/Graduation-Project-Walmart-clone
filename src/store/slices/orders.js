import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios/instance";


export const pastOrdersAction = createAsyncThunk(
  "orders/getPast",
  async (id) => {
    const res = await instance.get(`/orders/past/${id}`);
    // console.log(res);
    return res.data.allOrders;
  }
);

export const comingOrdersAction = createAsyncThunk(
  "orders/coming",
  async (id) => {
    const res = await instance.get(`/orders/coming/${id}`);
    // console.log(res);
    return res.data.allOrders;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: { pastOrders: [], comingOrders: [] },
  extraReducers: (builder) => {
    builder.addCase(pastOrdersAction.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.pastOrders = action.payload;
    });
    builder.addCase(pastOrdersAction.rejected, (state, action) => {
      console.log("rejected");
    });
    builder.addCase(comingOrdersAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.comingOrders = action.payload;
    });
    builder.addCase(comingOrdersAction.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default ordersSlice.reducer;
