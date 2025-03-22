import { RootState } from "../store";

export const selectFavorites = (state: RootState) => state.favorites.favorites;
export const selectIsFavorite = (id: number) => (state: RootState) =>
  selectFavorites(state).some((favorite) => favorite.id === id);
