import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectPLayers } from "../store/Slices/gameSlice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function ScoreBoard() {
  let playersTurnObj = useSelector(selectPLayers);
  let playerList = playersTurnObj ? playersTurnObj.rawList : [];

  return (
    <TableContainer component={Paper}>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Score Board
      </Typography>
      {playerList.length > 0 ? (
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerList.map((playerObj, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {"Player " + playerObj.playerId}
                </TableCell>
                <TableCell align="right">{playerObj.playerScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <CircularProgress />
      )}
    </TableContainer>
  );
}
