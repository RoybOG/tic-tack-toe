import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

import boardSlice, { changeCell, selectBoard } from "./Slices/boardSlice";
import gameSlice, {
  CurrentPlayerWon,
  SelectCurrentPLayerID,
  nextTurn,
  resetGame,
} from "./Slices/gameSlice";
import { createLogger } from "redux-logger";
import { checkForWin } from "../HelperCode";
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

export const playerMove = (rowNum, colNum) => {
  const playerID = SelectCurrentPLayerID(gameStore.getState());
  gameStore.dispatch(changeCell(rowNum, colNum, playerID)); //First update the board, than pull it

  const gameBoard = selectBoard(gameStore.getState());

  if (checkForWin(gameBoard, playerID, rowNum, colNum)) {
    gameStore.dispatch(CurrentPlayerWon());
    alert("Player " + playerID + " WON");
    gameStore.dispatch(resetGame());
  } else {
    gameStore.dispatch(nextTurn());
  }
};
/*
export const playersTurn = (x,y)=>{
  const currentPlayerID = SelectCurrentPLayerID(gameStore.getState())
  const game
  gameStore.dispatch(changeCell(x,y, currentPlayerID))


  if(checkForWin())
}
*/
