import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  location: string;
  equipment: string[];
  type: string | null;
}

const initialState: FiltersState = {
  location: "",
  equipment: [],
  type: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setEquipment(state, action: PayloadAction<string[]>) {
      state.equipment = action.payload;
    },
    setType(state, action: PayloadAction<string | null>) {
      state.type = action.payload;
    },
    resetFilters(state) {
      state.location = "";
      state.equipment = [];
      state.type = null;
    },
  },
});
export default filtersSlice.reducer;
export const { setLocation, setEquipment, setType, resetFilters } =
  filtersSlice.actions;
