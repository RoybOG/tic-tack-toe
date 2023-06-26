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
};

export const SelectCurrentPlayer = (state) => {
  console.log(state.game);
  return state.game.players.getPointed();
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.players.get(0);
    },
    nextTurn: (state) => {
      state.players.getNext();
    },
    CurrentPlayerWon: (state, aciton) => {
      //The player won with his turn
      SelectCurrentPlayer(state).addToScore();
      state.numOfGames++;
    },
  },
});

export const SelectCurrentPLayerID = (state) =>
  SelectCurrentPlayer(state).playerId;

export const selectPLayers = (state) => state.game.players;
export const { resetGame, nextTurn, CurrentPlayerWon } = gameSlice.actions;

export default gameSlice.reducer;
