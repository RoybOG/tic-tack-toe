import { Grid } from "@mui/material";
import React from "react";
import Cell from "./Cell";
import { useSelector } from "react-redux";
import { selectBoard } from "../store/Slices/boardSlice";

export default function Board(board_props) {
  // const {board_arr} = board_props
  const board_arr = useSelector(selectBoard);

  const BoardRow = ({ rowIndex }) => (
    <Grid container>
      {board_arr[0].map((el, index) => (
        <Grid item key={index}>
          <Cell ID={board_arr[rowIndex][index]} />
        </Grid>
      ))}
    </Grid>
  );
  const BoardCells = () =>
    board_arr.map((el, index) => <BoardRow key={index} rowIndex={index} />);

  return <BoardCells />;
}
