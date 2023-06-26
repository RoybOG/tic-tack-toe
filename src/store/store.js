import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import boardSlice from "./Slices/boardSlice";
import gameSlice from "./Slices/gameSlice";
import { createLogger } from "redux-logger";
export const gameStore = configureStore({
  reducer: {
    board: boardSlice,
    game: gameSlice,
  },
  middleware: [createLogger()],
  /* 
  [
    (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
      */
});
