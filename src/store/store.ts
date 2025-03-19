import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice";
// import filtersReducer from "./slices/filtersSlice";
// import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filters: filtersReducer,
    // favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
