import { Box, Button, Stack } from "@mui/material";
import type { NextPage } from "next";

interface RegistrationButtonProps {
  appType?: "google" | "slack" | "default";
}

const RegistrationButton: NextPage<RegistrationButtonProps> = ({ appType }) => {
  let content = "";

  switch (appType) {
    case "google":
      content = "Googleで登録";
      break;
    case "slack":
      content = "Slackワークスペースに追加";
      break;
    default:
      content = "新規登録";
      break;
  }

  // [TODO] Slack, Googleアイコンを追加する

  return (
    <Box mt={4} justifyContent="end">
      <Stack my={2} direction="row" justifyContent="end" spacing={1}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: 25,
            padding: 2,
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          {content}
        </Button>
      </Stack>
    </Box>
  );
};

export default RegistrationButton;
