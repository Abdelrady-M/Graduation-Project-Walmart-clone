import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
    name: "checkOut",
    initialState: {
        subTotal: 0,
        discount: 0,
        total: 0,
        delivery: 0,
    },
    reducers: {
        changeSubTotal: (state, action) => {
            let price = 0;
            !isNaN(action.payload.payload)
                ? (price = action.payload.payload)
                : (price = action.payload);
            state.subTotal = state.subTotal + price;
            state.total = state.subTotal * (1 - state.discount);
        },
        addDiscount: (state, action) => {
            !isNaN(action.payload) && (state.discount = action.payload / 100);
            state.subTotal = state.subTotal * (1 - state.discount);
        },
        setSubTotal: (state, action) => {
            state.subTotal = action.payload;
            console.log(action.payload);
        },
        changeTotal: (state, action) => {
            let value = state.subTotal + state.delivery - state.discount;
            console.log(value);
            state.total = value;
        },
        setDiscount: (state, action) => {
            let value = state.subTotal * (action.payload / 100);
            console.log(value);
            state.discount = value;
            state.total = state.subTotal + state.delivery - value;
        },
    },
});

export const { changeSubTotal, setSubTotal, changeTotal, setDiscount } =
    checkOutSlice.actions;
export default checkOutSlice.reducer;
