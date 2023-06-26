import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import boardSlice from "./Slices/boardSlice";
import gameSlice from "./Slices/gameSlice";

export const gameStore = configureStore({
  reducer: {
    board: boardSlice,
    game: gameSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
