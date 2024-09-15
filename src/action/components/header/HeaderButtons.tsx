import { Stack } from "@mui/joy";
import { bugReportURL, reviewUrl, supportUrl } from "../../../const/urls";
import HeaderButton from "./HeaderButton";

function HeaderButtons() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <HeaderButton href={supportUrl} icon="🍺">
        Support
      </HeaderButton>
      <HeaderButton href={reviewUrl} icon="⭐">
        Rate
      </HeaderButton>
      <HeaderButton href={bugReportURL} icon="📧">
        Report a bug
      </HeaderButton>
    </Stack>
  );
}

export default HeaderButtons;
