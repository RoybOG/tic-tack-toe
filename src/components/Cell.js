import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { playerMove } from "../store/store";

export default function Cell({ X, Y, ID }) {
  return (
    <Box
      sx={{
        mx: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      <Paper
        sx={{
          p: 3,
          bgcolor: "white",
          ":hover": { bgcolor: ID ? null : "yellow" },
        }}
        elevation={1}
        onClick={ID ? null : () => playerMove(X, Y)}
      >
        {ID ? ID : "_"}
      </Paper>
    </Box>
  );
}
