import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSinup } from "../action/sinupAction";

const sinupSlice = createSlice({
  name: "sinup",
  initialState: {
    sinup: [],
    status: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserSinup.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(UserSinup.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = "success";
        state.sinup = action.payload;
        state.error = null;
      })
      .addCase(UserSinup.rejected, (state) => {
        state.loading = false;
        state.status = "error";
        return state;
      });
  },
});

export default sinupSlice.reducer;
