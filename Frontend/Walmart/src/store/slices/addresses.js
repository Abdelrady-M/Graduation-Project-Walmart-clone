// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import instance from "../../axios/instance";

// export const fetchAddresses = createAsyncThunk(
//   "addresses/fetchAddresses",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await instance.get(`/addresses/${userId}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addAddress = createAsyncThunk(
//   "addresses/addAddress",
//   async (addressData, { rejectWithValue }) => {
//     try {
//       const response = await instance.post("/addresses", addressData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateAddress = createAsyncThunk(
//   "addresses/updateAddress",
//   async ({ addressId, addressData }, { rejectWithValue }) => {
//     try {
//       const response = await instance.put(
//         `/addresses/${addressId}`,
//         addressData
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteAddress = createAsyncThunk(
//   "addresses/deleteAddress",
//   async (addressId, { rejectWithValue }) => {
//     try {
//       const response = await instance.delete(`/addresses/${addressId}`);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const addressSlice = createSlice({
//   name: "addresses",
//   initialState: {
//     addresses: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAddresses.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchAddresses.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.addresses = action.payload;
//       })
//       .addCase(fetchAddresses.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(addAddress.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(addAddress.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.addresses.push(action.payload);
//       })
//       .addCase(addAddress.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateAddress.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(updateAddress.fulfilled, (state, action) => {
//         state.isLoading = false;
//         const index = state.addresses.findIndex(
//           (address) => address._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.addresses[index] = action.payload;
//         }
//       })
//       .addCase(updateAddress.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(deleteAddress.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(deleteAddress.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.addresses = state.addresses.filter(
//           (address) => address._id !== action.payload._id
//         );
//       })
//       .addCase(deleteAddress.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default addressSlice.reducer;
