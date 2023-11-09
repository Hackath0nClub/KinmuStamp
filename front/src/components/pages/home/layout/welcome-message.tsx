import { Box, Typography } from "@mui/material";
import { useBudouX } from "@/hooks/useBudouX";
import { CardBox } from "@/components/shared/ui/area/card";

export default function WelcomeMessage() {
  const serviceName = process.env.NEXT_PUBLIC_SERVICE_NAME;
  const { parse } = useBudouX();

  return (
    <CardBox>
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
    </CardBox>
  );
}
