"use client";

import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: green[600],
      contrastText: "#fff",
    },
    background: {
      default: "#f4f8f9",
    },
  },
});

export default theme;
