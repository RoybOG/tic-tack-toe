/*

export default function Board(board_props) {
  // const {board_arr} = board_props
  const board_arr = useSelector(selectBoard);
*/

import * as React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { CloseSharp } from "@mui/icons-material";
import Cell from "./Cell";
import { useSelector } from "react-redux";
import { selectBoard } from "../store/Slices/boardSlice";

export default function gameBoard() {
  const board_arr = useSelector(selectBoard);
  const Row = ({ RowIndex }) => {
    return (
      <Box
        sx={{
          p: 1,
          mx: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {board_arr[RowIndex].map((playerID, CellIndex) => (
          <Cell ID={playerID} X={RowIndex} Y={CellIndex} key={CellIndex} />
        ))}
      </Box>
    );
  };
  /*[
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ];*/
  return (
    <Paper
      sx={{
        float: "left",
        p: 1,
        my: 0,
        display: "flex",
        flexDirection: "column",
      }}
      elevation={3}
    >
      {board_arr.map((rowArr, RowIndex) => (
        <Row RowIndex={RowIndex} key={RowIndex} />
      ))}
    </Paper>
  );
}
