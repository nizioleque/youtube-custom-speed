import { Stack } from "@mui/joy";
import BugIcon from "../../../assets/icons/bug.svg";
import RateIcon from "../../../assets/icons/rate.svg";
import SupportIcon from "../../../assets/icons/support.svg";
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
      <HeaderButton href={supportUrl} icon={SupportIcon}>
        Support
      </HeaderButton>
      <HeaderButton href={reviewUrl} icon={RateIcon}>
        Rate
      </HeaderButton>
      <HeaderButton href={bugReportURL} icon={BugIcon}>
        Report a bug
      </HeaderButton>
    </Stack>
  );
}

export default HeaderButtons;
