import { createSlice } from "@reduxjs/toolkit";

const boardSize = 3; //This is the number of cels for side in the square board

const resetBoard = (boardArr) => {
  boardArr.forEach((col) => col.fill(0));
};

const createBoard = () => {
  let boardArr = Array.from(Array(boardSize), () => new Array(boardSize)); //This will create a new array f0r each index, instead of filling with refrences to the same array
  resetBoard(boardArr);
  return boardArr;
};

const initialState = {
  board: createBoard(),
};

const checkAllLine = (gameBoard, checkFunc) => {
  for (let i = 0; i < boardSize; i++) {
    if (!checkFunc(gameBoard, i)) return false;
  }
  return true;
};

const checkColumn = (gameBoard, columnNum, playerID) => {
  const checkFunc = (gb, i) => gb[i][columnNum] === playerID;
  return checkAllLine(gameBoard, checkFunc);
};

const checkRow = (gameBoard, rowNum, playerID) => {
  const checkFunc = (gb, i) => gb[rowNum][i] === playerID;
  return checkAllLine(gameBoard, checkFunc);
};

const checkDiagonal = (gameBoard, rowNum, colNum, playerID) => {
  if (rowNum === colNum) {
    //Checks one of the diagonals the cell is on
    const checkFunc = (gb, i) => gb[i][i] === playerID;
    return checkAllLine(gameBoard, checkFunc);
  } else if (rowNum + colNum === boardSize - 1) {
    //Checks the other diagonal the cell is on
    const checkFunc = (gb, i) => gb[boardSize - i - 1][i] === playerID;
    return checkAllLine(gameBoard, checkFunc);
  }

  return false;
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeCell: {
      reducer: (state, action) => {
        if (action.payload.x < boardSize && action.payload.y < boardSize)
          state.board[action.payload.x][action.payload.y] =
            action.payload.playerID;
      },
      prepare: (x, y, playerID) => ({ payload: { x, y, playerID } }),
    },
  },
});

export const selectBoard = (state) => state.board;
export const selectCell = (x, y) => (state) => state.board[x][y];

export const checkSelectedDiagonal = (rowNum, colNum, playerID) => (state) =>
  checkDiagonal(selectBoard(state), rowNum, colNum, playerID);
// Action creators are generated for each case reducer function
export const { changeCell } = boardSlice.actions;

export default boardSlice.reducer;
