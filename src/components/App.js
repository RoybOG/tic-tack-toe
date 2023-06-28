import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCell,
  selectBoard,
  changeCell,
} from "../store/Slices/boardSlice";
import {
  CurrentPlayerWon,
  SelectCurrentPLayerID,
  nextTurn,
  resetGame,
  selectNumOfGames,
  selectPLayers,
} from "../store/Slices/gameSlice";
import Cell from "./Cell";
import Board from "./board";
import { Box, Container, Grid, Typography } from "@mui/material";
import { playerMove } from "../store/store";
import { checkForWin } from "../HelperCode";
import ScoreBoard from "./ScoreBoard";
export default function App() {
  const dispatch = useDispatch();

  const currentPlayerID = useSelector(SelectCurrentPLayerID);
  const numOfGames = useSelector(selectNumOfGames);

  return (
    <Container maxWidth="sm">
      <Typography variant="h1">Tic Tack Toe</Typography>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">
          {numOfGames > 0 ? "Game number " + (numOfGames + 1) : ""}
        </Typography>
        <Typography variant="h3">{currentPlayerID + "'s turn"}</Typography>
      </Box>
      <br />
      <br />
      <Box
        sx={{
          p: 1,
          mx: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <Grid item sx={{ float: "left" }}> */}
        <Box
          sx={{
            mx: 3,
          }}
        >
          <Board />
        </Box>

        <Box
          sx={{
            mx: 3,
          }}
        >
          <ScoreBoard />
        </Box>
      </Box>
    </Container>
  );
}
