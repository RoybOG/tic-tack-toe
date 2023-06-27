import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import boardSlice, { changeCell, selectBoard } from "./Slices/boardSlice";
import gameSlice, { SelectCurrentPLayerID } from "./Slices/gameSlice";
import { createLogger } from "redux-logger";
import { checkColumn, checkDiagonal, checkRow } from "../HelperCode";
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

export const checkForWin = (rowNum, colNum) => {
  const playerID = SelectCurrentPLayerID(gameStore.getState());
  const gameBoard = selectBoard(gameStore.getState());
  return (
    checkRow(gameBoard, rowNum, playerID) ||
    checkColumn(gameBoard, colNum, playerID) ||
    checkDiagonal(gameBoard, rowNum, colNum, playerID)
  );
};

/*
export const playersTurn = (x,y)=>{
  const currentPlayerID = SelectCurrentPLayerID(gameStore.getState())
  const game
  gameStore.dispatch(changeCell(x,y, currentPlayerID))


  if(checkForWin())
}
*/
