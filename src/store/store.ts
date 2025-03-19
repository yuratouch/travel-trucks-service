import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice";
import favoritesReducer from "./slices/favoritesSlice";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig: PersistConfig<
  ReturnType<typeof favoritesReducer>
> = {
  key: "favorites",
  storage,
};

const favoritesPersistedReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
