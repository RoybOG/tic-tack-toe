import { BOARDSIZE } from "./consts";

export const checkAllLine = (gameBoard, checkFunc) => {
  for (let i = 0; i < BOARDSIZE; i++) {
    if (!checkFunc(gameBoard, i)) return false;
  }
  return true;
};

export const checkColumn = (gameBoard, columnNum, playerID) => {
  const checkFunc = (gb, i) => gb[i][columnNum] === playerID;
  return checkAllLine(gameBoard, checkFunc);
};

export const checkRow = (gameBoard, rowNum, playerID) => {
  const checkFunc = (gb, i) => gb[rowNum][i] === playerID;
  return checkAllLine(gameBoard, checkFunc);
};

export const checkDiagonal = (gameBoard, rowNum, colNum, playerID) => {
  if (rowNum === colNum) {
    //Checks one of the diagonals the cell is on
    const checkFunc = (gb, i) => gb[i][i] === playerID;
    return checkAllLine(gameBoard, checkFunc);
  } else if (rowNum + colNum === BOARDSIZE - 1) {
    //Checks the other diagonal the cell is on
    const checkFunc = (gb, i) => gb[BOARDSIZE - i - 1][i] === playerID;
    return checkAllLine(gameBoard, checkFunc);
  }

  return false;
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
