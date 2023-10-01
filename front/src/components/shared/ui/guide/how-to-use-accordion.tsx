import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import DARK_APP_COLOR from "@/utils/const/app-colors";
import HowToUse from "./how-to-use";

export default function HowToUseAccordion() {
  return (
    <Accordion
      sx={{
        borderRadius: 4,
        marginTop: 4,
        backgroundColor: DARK_APP_COLOR.CARD_BACKGROUND,
      }}
    >
      <AccordionSummary
        sx={{
          borderRadius: 4,
          color: DARK_APP_COLOR.TEXT,
          "&:hover": {
            backgroundColor: DARK_APP_COLOR.CARD_BACKGROUND_ACTIVE,
          },
          fontSize: "20px",
        }}
      >
        使い方を見る
      </AccordionSummary>
      <AccordionDetails sx={{ borderRadius: 4, color: DARK_APP_COLOR.TEXT }}>
        <HowToUse></HowToUse>
      </AccordionDetails>
    </Accordion>
  );
}
