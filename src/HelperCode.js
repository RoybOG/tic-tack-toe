import { BOARDSIZE } from "./consts";

const checkAllLine = (gameBoard, checkFunc) => {
  for (let i = 0; i < BOARDSIZE; i++) {
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
  const checkEqualDiagonal = (gb, i) => gb[i][i] === playerID; //Checks one of the diagonals where the cell's X and Y are equal
  const checkUpDiagonal = (gb, i) => gb[BOARDSIZE - i - 1][i] === playerID;
  if (rowNum === colNum) {
    if (rowNum === (BOARDSIZE - 1) / 2) {
      //Check wheather it is the middle point. the middle cell is the only common cell between diagonals.
      return (
        checkAllLine(gameBoard, checkUpDiagonal) ||
        checkAllLine(gameBoard, checkEqualDiagonal)
      );
    }
    return checkAllLine(gameBoard, checkEqualDiagonal);
  } else if (rowNum + colNum === BOARDSIZE - 1) {
    //Checks the other diagonal the cell is on

    return checkAllLine(gameBoard, checkUpDiagonal);
  }

  return false;
};

export const checkForWin = (gameBoard, CurrentplayerID, rowNum, colNum) => {
  return (
    checkRow(gameBoard, rowNum, CurrentplayerID) ||
    checkColumn(gameBoard, colNum, CurrentplayerID) ||
    checkDiagonal(gameBoard, rowNum, colNum, CurrentplayerID)
  );
};

function mod(n, m) {
  return ((n % m) + m) % m; //Unfortunately, Native '%' only returns the reminder. so for negative numbers, it still returns a negative result
}
export class CyclicalList {
  #raw_list = [];
  #index = 0;
  #length = 0;
  constructor(normal_list) {
    this.#raw_list = [...normal_list];
    this.#length = normal_list.length;
  }

  #calculateIndex(wantedIndex) {
    return mod(wantedIndex, this.#length);
  }
  getPointed() {
    return this.#raw_list[this.#index];
  }
  get(wantedIndex) {
    this.#index = this.#calculateIndex(wantedIndex);
    return this.getPointed();
  }
  getNext() {
    return this.get(this.#index + 1);
  }
  getPrevious() {
    return this.get(this.#index - 1);
  }
  get position() {
    return this.#index;
  }
  get length() {
    return this.#length;
  }

  get rawList() {
    return this.#raw_list;
  }
  toString() {
    return this.#raw_list.toString();
  }
}
