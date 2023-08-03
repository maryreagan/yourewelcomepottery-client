import React from "react";
import { Typography } from "@mui/material";

function Cancel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2em",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        mb={2}
        marginTop="1em"
        color="primary"
        fontFamily="Salsa-Regular"
      >
        Transaction cancelled. 😢
      </Typography>
    </div>
  );
}

export default Cancel;
