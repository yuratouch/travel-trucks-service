import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "../operations";

interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: Array<{
    thumb: string;
    original: string;
  }>;
  reviews: Array<{
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }>;
}

interface CampersState {
  items: Camper[];
}

const initialState: CampersState = {
  items: [],
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        console.log("fetchCampers.pending");
      })
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<{ items: Camper[] }>) => {
          console.log("fetchCampers.fulfilled");
          console.log("action.payload", action.payload.items);
          state.items = action.payload.items;
        }
      )
      .addCase(fetchCampers.rejected, (state, action) => {
        console.log("fetchCampers.rejected", action.error);
      });
  },
});

export const selectCampers = (state: { campers: CampersState }) =>
  state.campers.items;
export default campersSlice.reducer;
