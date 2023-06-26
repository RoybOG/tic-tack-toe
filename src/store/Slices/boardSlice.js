import { createSlice } from "@reduxjs/toolkit";
import { BOARDSIZE } from "../../consts";
import { checkDiagonal } from "../../HelperCode";

const resetBoard = (boardArr) => {
  boardArr.forEach((col) => col.fill(0));
};

const createBoard = () => {
  let boardArr = Array.from(Array(BOARDSIZE), () => new Array(BOARDSIZE)); //This will create a new array f0r each index, instead of filling with refrences to the same array
  resetBoard(boardArr);
  return boardArr;
};

const initialState = {
  board: createBoard(),
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeCell: {
      reducer: (state, action) => {
        if (action.payload.x < BOARDSIZE && action.payload.y < BOARDSIZE)
          state.board[action.payload.x][action.payload.y] =
            action.payload.playerID;
      },
      prepare: (x, y, playerID) => ({ payload: { x, y, playerID } }),
    },
  },
});

export const selectBoard = (state) => {
  console.log(state);
  return state.board;
};
export const selectCell = (x, y) => (state) => state.board[x][y];

export const checkSelectedDiagonal = (rowNum, colNum, playerID) => (state) =>
  checkDiagonal(selectBoard(state), rowNum, colNum, playerID);
// Action creators are generated for each case reducer function
export const { changeCell } = boardSlice.actions;

export default boardSlice.reducer;
