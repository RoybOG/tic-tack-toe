import React, { useState } from "react";
import Box from "@mui/material/Box";

export default function Cell({ ID }) {
  const [playerID, setPlayerID] = useState(ID || "_");
  return (
    <Box
      sx={{
        display: "inline-flex",
        m: 1,
        p: 1,
        bgcolor: "white",
        //   color: (theme) =>
        //     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: "1px solid",
        //   borderColor: 'white',
        borderRadius: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      {playerID}
    </Box>
  );
}
