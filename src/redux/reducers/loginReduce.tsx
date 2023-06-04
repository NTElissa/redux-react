import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin } from "../action/LoginAction";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: [],
    status: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserLogin.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(UserLogin.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = "success";
        state.login = action.payload;
        state.error = null;
      })
      .addCase(UserLogin.rejected, (state) => {
        state.loading = false;
        state.status = "error";
        return state;
      });
  },
});

export default loginSlice.reducer;
