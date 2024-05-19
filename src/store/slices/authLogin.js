import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from "../../axios/instance";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await instance.post('/users/signin', { email, password });
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            // Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userLogout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            localStorage.removeItem('token');
            return null;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userToken = localStorage.getItem('token') || null; // Retrieve user token from local storage

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login user
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.userInfo = payload
                state.userToken = payload.userToken
            })
            .addCase(userLogin.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(userLogout.fulfilled, (state) => {
                state.loading = false;
                state.userInfo = null; // Clear userInfo when logging out
                state.userToken = null; // Clear userToken when logging out
            });
    },
})

export default userSlice.reducer;
