import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "../operations";

interface CamperGalleryItem {
  thumb: string;
  original: string;
}

interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
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
  gallery: CamperGalleryItem[];
  reviews: CamperReview[];
}

interface CampersState {
  items: Camper[];
  loader: boolean;
}

const initialState: CampersState = {
  items: [],
  loader: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loader = true;
        console.log("fetchCampers.pending");
      })
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<{ items: Camper[] }>) => {
          state.items = action.payload.items;
          state.loader = false;
        }
      )
      .addCase(fetchCampers.rejected, (state, action) => {
        console.log("fetchCampers.rejected", action.error);
        state.loader = false;
      });
  },
});

export default campersSlice.reducer;
