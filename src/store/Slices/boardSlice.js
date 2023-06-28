import { createSlice } from "@reduxjs/toolkit";
import { BOARDSIZE } from "../../consts";
import { checkDiagonal } from "../../HelperCode";

const resetBoard = (boardArr) => {
  boardArr.forEach((col) => col.fill(""));
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
  extraReducers: function (builder) {
    builder.addCase("game/resetGame", (state) => {
      resetBoard(state.board);
    });
  },
});

export const selectBoard = (state) => {
  return state.board.board;
};
export const selectCell = (x, y) => (state) => state.board[x][y];

export const { changeCell } = boardSlice.actions;

export default boardSlice.reducer;
