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
  selectPLayers,
} from "../store/Slices/gameSlice";
import Cell from "./Cell";
import Board from "./board";
import { Container, Grid } from "@mui/material";
import { playerMove } from "../store/store";
import { checkForWin } from "../HelperCode";
export default function App() {
  const dispatch = useDispatch();

  const b = useSelector(SelectCurrentPLayerID);
  const gameBoard = useSelector(selectBoard);
  console.log(useSelector(selectPLayers));
  console.log(b);
  // console.log(useSelector(selectPLayers));
  // console.log(useSelector(SelectCurrentPLayerID));

  // const t = useSelector(selectBoard);
  // console.table(t);

  useEffect(() => {
    // dispatch(CurrentPlayerWon());
    // dispatch(nextTurn());
    // dispatch(CurrentPlayerWon());
    // dispatch(resetGame());
    // dispatch(CurrentPlayerWon());
    // playerMove(0, 0);
    // playerMove(1, 1);
    // playerMove(2, 2);
    // dispatch(resetGame());
    // dispatch(nextTurn());

    console.log("effect");
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item>
          <Board />
        </Grid>
        <Grid item>{b + "'s turn"}</Grid>
      </Grid>
    </Container>
  );
}
