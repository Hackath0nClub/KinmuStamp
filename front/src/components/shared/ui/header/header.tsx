import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Header() {
  const serviceName = process.env.NEXT_PUBLIC_SERVICE_NAME;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" fontSize="1.5rem" component="div" sx={{ flexGrow: 1 }}>
            {serviceName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
