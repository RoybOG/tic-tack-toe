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
import { checkForWin } from "../store/store";
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
    // dispatch(nextTurn());
    // dispatch(CurrentPlayerWon());
    // dispatch(nextTurn());
    // dispatch(CurrentPlayerWon());
    // dispatch(resetGame());
    // dispatch(CurrentPlayerWon());
    dispatch(changeCell(0, 2, b));
    dispatch(changeCell(1, 1, b));
    dispatch(changeCell(2, 0, b));
    /*
    if (checkForWin(gameBoard, 1, 1, b)) {
      alert("player won");
    }
    */
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
