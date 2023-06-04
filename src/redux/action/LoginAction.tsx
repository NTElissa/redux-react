import axios from "axios";
import { createAsyncThunk,createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserLogin = createAsyncThunk(
  "api/login",
 
  async (loginUser:object,{rejectWithValue}) => {
    try {
      const response = await axios.post('https://talented-wig-goat.cyclic.app/api/login', loginUser); //URL HERE
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


