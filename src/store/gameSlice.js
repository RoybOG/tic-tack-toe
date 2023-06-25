import { createSlice } from "@reduxjs/toolkit";
import { NUMOFPLAYERS, PLAYERIDS } from "../consts";
import Player from "./Player";
import { CyclicalList } from "../HelperCode";

const createPLayerList = () => {
  let raw_player_list = [new Player(PLAYERIDS.x), new Player(PLAYERIDS.circle)];
  for (let i = Object.keys(PLAYERIDS).length + 1; i <= NUMOFPLAYERS; i++) {
    console.log(i);
    raw_player_list.push(new Player(i.toString()));
  }
  return new CyclicalList(raw_player_list);
};

const initialState = {
  players: createPLayerList(),
  numOfGames: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    get,
  },
});

export default gameSlice.reducer;
