import { createSlice } from "@reduxjs/toolkit";
import { NUMOFPLAYERS, PLAYERIDS } from "../../consts";
import Player from "../Player";
import { CyclicalList } from "../../HelperCode";

const createPLayerList = () => {
  let raw_player_list = [new Player(PLAYERIDS.x), new Player(PLAYERIDS.circle)];
  for (let i = Object.keys(PLAYERIDS).length + 1; i <= NUMOFPLAYERS; i++) {
    // console.log(i);
    raw_player_list.push(new Player(i.toString()));
  }
  console.log("created list");
  return new CyclicalList(raw_player_list);
};

const initialState = {
  players: createPLayerList(),
  numOfGames: 0,
  changeState: true, //This is a temp fix for store not updating when a field is changed in a store, becuase it's the same place in memory, the store thinks nothings changed
};

export const SelectCurrentPlayer = (gameState) => {
  return gameState.players.getPointed();
};

const updateState = (state) => {
  state.changeState = !state.changeState;
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.players.get(0);
      updateState(state);
    },
    nextTurn: (state) => {
      state.players.getNext();
      updateState(state);
    },
    CurrentPlayerWon: (state, aciton) => {
      //The player won with his turn
      SelectCurrentPlayer(state).addToScore();
      state.numOfGames++;
    },
  },
});

export const SelectCurrentPLayerID = (state) => {
  return SelectCurrentPlayer(state.game).playerId;
};

export const selectPLayers = (state) => state.game.players;
export const { resetGame, nextTurn, CurrentPlayerWon } = gameSlice.actions;

export default gameSlice.reducer;
