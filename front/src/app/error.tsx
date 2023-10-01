"use client";

import { useEffect } from "react";
import { Button, Box } from "@mui/material";

export default function ErrorDisplay({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("error", error);
  }, [error]);

  return (
    <Box>
      <p>エラーが発生しました</p>
      <Button onClick={() => reset()} />
    </Box>
  );
}
