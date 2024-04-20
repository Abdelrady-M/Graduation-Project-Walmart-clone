import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";
import axios from "axios";

export const userAction = createAsyncThunk('user/getUser', async (id) => {
    const res = await instance.get(`/users/${id}`);
    return res.data;
});

export const userEditAction = createAsyncThunk('edit/user', async (editUser) => {
    const { id, name, email, password } = editUser;
    const userData = { name, email };

    try {
        const res = await instance.put(`/users/${id}`, password ? { ...userData, password } : userData);
        return res.data;
    } catch (error) {
        throw error;
    }
});


export const userAddressPostAction = createAsyncThunk("create/userAddress", async (address) => {
    // console.log([...address]);
    const { id } = address[0]
    const sendAddress = address[1]
    console.log(sendAddress);
    const res = await instance.put(`http://localhost:3000/users/address/${id}`, [...sendAddress])
    return res
})

const userSlice = createSlice({
    name: "user",
    initialState: { user: {} },
    extraReducers: (builder) => {
        builder.addCase(userAction.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload
        })
        builder.addCase(userAction.rejected, (state, action) => {
            console.log("rejected");
        })
        builder.addCase(userEditAction.fulfilled, (state, action) => {
            console.log(action.payload);
        })
        builder.addCase(userEditAction.rejected, (state, action) => {
            console.log("rejected");
        })
        builder.addCase(userAddressPostAction.fulfilled, (state, action) => {
            console.log(action.payload);
        })
        builder.addCase(userAddressPostAction.rejected, (state, action) => {
            console.log("rejected");
        })
    }
})

export default userSlice.reducer