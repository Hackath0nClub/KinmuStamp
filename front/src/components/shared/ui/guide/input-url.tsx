import { Box, TextField, Typography } from "@mui/material";
import { CardBox } from "../area/card";

export default function InputUrl() {
  return (
    <CardBox>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>公開シートのURLを入力</Typography>
        </Box>
        <Box>
          <TextField sx={{ display: "flex", maxWidth: 360 }} />
        </Box>
      </Box>
    </CardBox>
  );
}
