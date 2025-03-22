import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favorites: { id: number }[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<{ id: number }>) {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload.id
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
        return;
      }

      state.favorites.push({ id: action.payload.id });
    },
  },
});

export default favoritesSlice.reducer;
export const { toggleFavorite } = favoritesSlice.actions;
