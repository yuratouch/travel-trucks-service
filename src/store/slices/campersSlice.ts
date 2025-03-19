import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        console.log("fetchCampers.pending");
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        console.log("fetchCampers.fulfilled");
        console.log(action.payload);
        return action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        console.log("fetchCampers.rejected");
      });
  },
});

interface CampersState {
  campers: {
    items: Object[];
    total: number;
  };
}
export const selectCampers = (state: CampersState) => state.campers.items;

export default campersSlice.reducer;
