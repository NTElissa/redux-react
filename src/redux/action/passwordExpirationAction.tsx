import axios from "axios";
import { createAsyncThunk,createSlice, PayloadAction } from "@reduxjs/toolkit";

export const passwordExpirationAction = createAsyncThunk(
  "api/usersRestrict",
 
  async (UserPopup:object,{rejectWithValue}) => {
    try {
      const response = await axios.get('http://localhost:3000/api/usersRestrict', UserPopup); //URL HERE
     console.log("response from backend", response.data)

      return response;
    } catch (error:any) {
        console.log('login error:', error.response.data.status);
        // alert(error.response.data.message)
        return rejectWithValue(error.response.data.status);
        // throw error;
    }
  }
);


