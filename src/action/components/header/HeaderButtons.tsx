import { Stack } from "@mui/joy";
import { bugReportURL, reviewUrl, supportUrl } from "../../../const/urls";
import HeaderButton from "./HeaderButton";

function HeaderButtons() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
      }}
    >
      <HeaderButton href={supportUrl}>🍺 Support</HeaderButton>
      <HeaderButton href={reviewUrl}>⭐ Rate</HeaderButton>
      <HeaderButton href={bugReportURL}>📧 Report a bug</HeaderButton>
    </Stack>
  );
}

export default HeaderButtons;
