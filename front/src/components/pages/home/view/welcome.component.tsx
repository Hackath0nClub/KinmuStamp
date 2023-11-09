import { Box, Grid } from "@mui/material";
import MyHead from "@/components/html/Head";
import WelcomeMessage from "../layout/welcome-message";
import InputUrl from "@/components/shared/ui/guide/input-url";
import RegistrationButton from "@/components/shared/ui/buttons/registration-button";

/** 未ログイン状態でホーム画面へアクセスした際に表示する */
export default function Welcome() {
  return (
    <>
      <MyHead pageName="Slackでログインして始める"></MyHead>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Box mx={4} maxWidth={600}>
          <Box></Box>
          <WelcomeMessage></WelcomeMessage>
          <InputUrl />
          <RegistrationButton appType="slack"></RegistrationButton>
        </Box>
      </Grid>
    </>
  );
}
