import { RootState } from "../store";

export const selectFilters = (state: RootState) => state.filters;
export const selectLocation = (state: RootState) =>
  selectFilters(state).location;
export const selectEquipment = (state: RootState) =>
  selectFilters(state).equipment;
export const selectType = (state: RootState) => selectFilters(state).type;
