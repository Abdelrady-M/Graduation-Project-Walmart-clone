import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";
import toast, { LoaderIcon } from "react-hot-toast";
import axios from "axios";

export const cartRequestAction = createAsyncThunk("cart/getAll", async () => {
    const { token, token2 } = localStorage;
    if (token) {
        const res = await instance.get("/cart", { headers: { token } });
        return res.data.data.items;
    } else if (token2) {
        const res = await instance.get("/cart", { headers: { token2 } });
        return res.data.data.items;
    }
});


export const addToCartAction = createAsyncThunk(
    "cart/addProduct",
    async ({ id, quantity }) => {
        let { token, token2 } = localStorage;
        if (token) {
            const status = await instance.post(
                `/cart/${id}`,
                { quantity },
                {
                    headers: { token },
                }
            );
            console.log("status", status);
            return status;
        } else if (token2) {
            const status = await instance.post(
                `/cart/${id}`,
                { quantity },
                {
                    headers: { token2 },
                }
            );
            return status.data.data;
        }
        const status = await instance.post(`/cart/${id}`);
        token2 = JSON.stringify({
            userId: status.data.data.userId,
            cartId: status.data.data._id,
        });
        localStorage.setItem("token2", token2);
        return status.data.data;
    }
);

export function addToBothCartsAction(id, quantity) {
    return (dispatch) => {
        dispatch(addToCartAction({ id, quantity })).then(() => {
            toast.success(`Product added to the cart successfully`);
            dispatch(cartRequestAction());
        });
    };
}

export const modifyProductAction = createAsyncThunk(
    "cart/modifyProduct",
    async (params) => {
        const { productId, quantity } = params;
        const { token, token2 } = localStorage;
        var res;
        if (token) {
            res = await instance.patch(
                "/cart",
                { productId, quantity },
                { headers: { token } }
            );
        } else if (token2) {
            res = await instance.patch(
                "/cart",
                { productId, quantity },
                { headers: { token2 } }
            );
        }
        return res;
    }
);

export function modifyBothProductAction(params) {
    return (dispatch) => {
        dispatch(modifyProductAction(params)).then(() => {
            dispatch(cartRequestAction());
        });
    };
}

export const removeFromCartRequestAction = createAsyncThunk(
    "cart/removeProduct",
    async (id) => {
        let { token, token2 } = localStorage;
        let status;
        if (token) {
            status = await instance.patch(`/cart/${id}`, {}, { headers: { token } });
        } else if (token2) {
            status = await instance.patch(`/cart/${id}`, {}, { headers: { token2 } });
        }
        console.log(status);
        return status;
    }
);

export function removeFromCartAction(id) {
    return (dispatch) => {
        dispatch(removeFromCartRequestAction(id)).then(() => {
            dispatch(cartRequestAction());
        });
    };
}

export const deleteCart = createAsyncThunk("cart/delete", async (id) => {
    console.log(id);
    const res = axios.delete(`http://localhost:4000/cart/${id}`);
    console.log(res);
    return res.data;
});

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartProducts: [], loading: false },
    extraReducers: (builder) => {
        builder.addCase(cartRequestAction.fulfilled, (state, action) => {
            state.cartProducts = action.payload;
            state.loading = false;
        });
        builder.addCase(modifyProductAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(modifyProductAction.rejected, (state, action) => {
            console.log("rejected");
            // cartRequestAction()
            state.loading = false;
        });
        builder.addCase(removeFromCartRequestAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(removeFromCartRequestAction.fulfilled, (state, action) => {
            // removes the item from the cart slice using its 'id' I got from "action.meta.arg"
            state.cartProducts = state.cartProducts.filter(
                (item) => item._id._id != action.meta.arg
            );
            // state.loading = false
        });
        builder.addCase(deleteCart.fulfilled, (state, action) => {
            console.log("paylooooooood", action.payload);
        });
        builder.addCase(deleteCart.rejected, (state, action) => {
            console.log("rejected");
        });
    },
});

export const { reset, loadingToggleAction } = cartSlice.actions;
export default cartSlice.reducer;