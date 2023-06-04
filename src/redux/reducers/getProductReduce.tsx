import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetProduct } from "../action/getProductAction";

const GetProductSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    status: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProduct.pending, (state) => {
        state.loading = true;
        state.status = "pending";
        state.error = null;
      })
      .addCase(GetProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = "success";
        state.product= action.payload;
        state.error = null;
      })
      .addCase(GetProduct.rejected, (state) => {
        state.loading = false;
        state.status = "error";
        return state;
      });
  },
});

export default GetProductSlice.reducer;
