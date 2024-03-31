import toast from "react-hot-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToBothCartsAction } from "./cart";
import instance from "../../axios/instance";






export const wishListRequestAction = createAsyncThunk(
    "wish/getAll",
    async () => {
        const { token } = localStorage;
        if (token) {
            const res = await instance.get("/wish", { headers: { token } });
            return res.data.data.items;
        }
    }
);

export const addToWishListRequestAction = createAsyncThunk(
    "wish/addProduct",
    async (id) => {
        const { token } = localStorage;
        if (token) {
            const status = await instance.post(
                `/wish/${id}`,
                { id },
                {
                    headers: { token },
                }
            );
            return status;
        }
        return token;
    }
);

export function addToWishListAction(id) {
    toast.success("Added to wishlist", { position: "top-center" });
    return (dispatch) => {
        dispatch(addToWishListRequestAction(id)).then(() => {
            console.log("af req");
            dispatch(wishListRequestAction());
        });
    };
}

export const removeFromWishListRequestAction = createAsyncThunk(
    "wish/removeProduct",
    async (id) => {
        const { token } = localStorage;
        if (token) {
            const status = await instance.patch(
                `/wish/${id}`,
                {},
                { headers: { token } }
            );
            console.log(status);
            return status;
        }
    }
);

export function moveToCartAction(id) {
    return (dispatch) => {
        dispatch(removeFromWishListRequestAction(id)).then(() => {
            dispatch(wishListRequestAction());
        });
        dispatch(addToBothCartsAction(id));
    };
}

export function removeFromWishAction(id) {
    return (dispatch) => {
        dispatch(removeFromWishListRequestAction(id)).then(() => {
            dispatch(wishListRequestAction());
        });
    };
}

const wishListSlice = createSlice({
    name: "wish",
    initialState: { list: [], loading: false },
    extraReducers: (builder) => {
        builder.addCase(wishListRequestAction.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });
        builder.addCase(removeFromWishListRequestAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            removeFromWishListRequestAction.fulfilled,
            (state, action) => {
                // removes the item from the wish list slice using its 'id' I got from "action.meta.arg"
                state.list = state.list.filter(
                    (item) => item._id._id != action.meta.arg
                );
            }
        );
    },
});

export default wishListSlice.reducer;
