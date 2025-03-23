import { RootState } from "../store";

export const selectLoader = (state: RootState) => state.campers.loader;

export const selectCampers = (state: RootState) => state.campers.items;

export const selectedCamper = (state: RootState) =>
  state.campers.selectedCamper;
