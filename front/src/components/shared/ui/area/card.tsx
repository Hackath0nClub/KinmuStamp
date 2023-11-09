"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(2),
  backgroundColor: "#fff",
  borderRadius: 8,
  borderColor: "#bbbbbb",
  borderStyle: "solid",
  borderWidth: "1px",
}));
