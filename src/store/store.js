import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";
import gameSlice from "./gameSlice";

export const gameStore = configureStore({
  reducer: {
    [boardSlice.name]: boardSlice,
    [gameSlice.name]: gameSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
