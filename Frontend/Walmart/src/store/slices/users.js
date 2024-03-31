import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const userAction = createAsyncThunk("user/getUser", async (id) => {
    // console.log(id);
    const res = await axios.get(`http://localhost:4000/users/${id}`)
    return res.data
})

export const userEditAction = createAsyncThunk("edit/user", async (editUser) => {
    // console.log(editUser);
    const { id } = editUser
    const { name } = editUser
    const { email } = editUser
    const { password } = editUser
    if (password) {
        const res = await axios.put(`http://localhost:4000/users/${editUser.id}`, { "name": name, "email": email, "password": password })
        return res
    }
    else {
        const res = await axios.put(`http://localhost:4000/users/${editUser.id}`, { "name": name, "email": email })
        return res
    }

})

export const userAddressPostAction = createAsyncThunk("create/userAddress", async (address) => {
    // console.log([...address]);
    const { id } = address[0]
    const sendAddress = address[1]
    // console.log(sendAddress);
    const res = await axios.put(`http://localhost:4000/users/address/${id}`, [...sendAddress])
    return res
})

const userSlice = createSlice({
    name: "user",
    initialState: { user: {} },
    extraReducers: (builder) => {
        builder.addCase(userAction.fulfilled, (state, action) => {
            // console.log(action.payload);
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