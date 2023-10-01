import { Box, Typography } from "@mui/material";
import DARK_APP_COLOR from "@/utils/const/app-colors";
import { useBudouX } from "@/hooks/useBudouX";

export default function WelcomeMessage() {
  const serviceName = process.env.NEXT_PUBLIC_SERVICE_NAME;
  const { parse } = useBudouX();

  return (
    <Box mt={4} bgcolor={DARK_APP_COLOR.CARD_BACKGROUND} borderRadius={4} padding={4}>
      <Typography variant="h4">{serviceName}へようこそ！登録を始めよう</Typography>
      <Box mt={2}>
        <Typography fontSize="20px">
          {parse(`${serviceName}はSlackと連携した勤怠管理サービスです。`)}
        </Typography>
        <Typography fontSize="20px">
          {parse(`Slackワークスペースに${serviceName}
          を追加することでGoogleスプレッドシートに勤怠表を作成することができます。`)}
        </Typography>
      </Box>
    </Box>
  );
}
