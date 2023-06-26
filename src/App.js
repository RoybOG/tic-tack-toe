import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCell,
  selectBoard,
  changeCell,
  checkSelectedDiagonal,
} from "./store/Slices/boardSlice";
import {
  CurrentPlayerWon,
  SelectCurrentPLayerID,
  nextTurn,
  resetGame,
  selectPLayers,
} from "./store/Slices/gameSlice";
export default function App() {
  const dispatch = useDispatch();

  const b = useSelector(SelectCurrentPLayerID);
  console.log(useSelector(selectPLayers));
  console.log(b);
  // console.log(useSelector(selectPLayers));
  // console.log(useSelector(SelectCurrentPLayerID));

  // const t = useSelector(selectBoard);
  // console.table(t);
  useEffect(() => {
    dispatch(nextTurn());
    dispatch(CurrentPlayerWon());
    dispatch(nextTurn());
    dispatch(CurrentPlayerWon());
    dispatch(resetGame());
    // dispatch(CurrentPlayerWon());
    // dispatch(changeCell(0, 2, 1));
    // dispatch(changeCell(1, 1, 1));
    // dispatch(changeCell(2, 0, 1));
    console.log("effect");
  }, []);
  return <p>{"" + b}</p>;
}
