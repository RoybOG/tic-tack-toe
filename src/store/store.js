import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";

export const gameStore = configureStore({
  [boardSlice.name]: boardSlice,
  // [playerSlice.name]: playerSlice,
});
