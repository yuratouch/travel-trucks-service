import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios("campers");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as any).message || "An unknown error occurred"
      );
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id: string, thunkAPI) => {
    try {
      const { data } = await axios(`campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as any).message || "Failed to fetch camper"
      );
    }
  }
);
