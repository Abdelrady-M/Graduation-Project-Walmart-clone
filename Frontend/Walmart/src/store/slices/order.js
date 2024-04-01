import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";

export const oneOrderAction = createAsyncThunk("get/oneOrder", async (id) => {
    const res = await instance.get(`/orders/${id}`);
    console.log("res=========>", res.data.order);
    return res.data.order;
});

export const postOneOrder = createAsyncThunk("create/order", async (order) => {
    try {
        const orderCreationResponse = await instance.post(`/orders/`, order);

        if (orderCreationResponse.status === 201) {
            console.log("Order created successfully:", orderCreationResponse.data);
            return orderCreationResponse.data;
        } else {
            console.error(
                "Failed to create order:",
                orderCreationResponse.statusText
            );
        }
    } catch (error) {
        console.error("Error creating order:", error.message);
        console.log("Error response data:", error.response.data);
    }
});

const oneOrderSlice = createSlice({
    name: "oneOrder",
    initialState: { oneOrder: {} },
    extraReducers: (builder) => {
        builder.addCase(oneOrderAction.fulfilled, (state, action) => {
            state.oneOrder = action.payload[0];
        });
        builder.addCase(oneOrderAction.rejected, (state, action) => {
            console.log("rejected");
        });
        builder.addCase(postOneOrder.fulfilled, (state, action) => {
            console.log(action.payload);
        });
        builder.addCase(postOneOrder.rejected, (state, action) => {
            console.log("rejected");
        });
    },
});

export default oneOrderSlice.reducer;
