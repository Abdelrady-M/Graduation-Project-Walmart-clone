import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios/instance";

export const userAddressPostAction = createAsyncThunk(
  "userAddress/create",
  async (address) => {
    try {
      const { id } = address[0];
      const sendAddress = address[1];
      const res = await instance.put(`/users/address/${id}`, [...sendAddress]);
      return res.data; 
    } catch (error) {
      throw error; 
    }
  }
);


export function getAddress(address, id) {
  return (dispatch) => {
    dispatch(userAddressPostAction(address)).then(() => {
      dispatch(userAddressGetAction(id));
    });
  };
}
export const userAddressGetAction = createAsyncThunk(
  "userAddress/fetch",
  async (id) => {
    try {
      const res = await instance.get(`/users/${id}`);
      return res.data.addressBook;
    } catch (error) {
      throw error;
    }
  }
);

const userAddressSlice = createSlice({
  name: "userAddress",
  initialState: { address: [] },
  extraReducers: (builder) => {
    builder.addCase(userAddressGetAction.fulfilled, (state, action) => {
      state.address = action.payload;
      console.log(action.payload);
    });
    builder.addCase(userAddressGetAction.rejected, (state, action) => {
      console.log("rejected");
    });
    builder.addCase(userAddressPostAction.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(userAddressPostAction.rejected, (state, action) => {
      console.log("rejected");
    });
  },
});

export default userAddressSlice.reducer;
