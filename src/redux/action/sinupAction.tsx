import axios from "axios";
import { createAsyncThunk,createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserSinup = createAsyncThunk(
  "api/register",
 
  async (UserSinup:object,{rejectWithValue}) => {
    try {
      const response = await axios.post('http://localhost:3000/api/register/api/register', UserSinup); //URL HERE
     console.log("response from backend", response.data)

      return response;
    } catch (error:any) {
        console.log('popup error:', error.response.data.status);
        // alert(error.response.data.message)
        return rejectWithValue(error.response.data.status);
        // throw error;
    }
  }
);


