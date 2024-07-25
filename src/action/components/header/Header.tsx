import { Stack } from "@mui/joy";
import HeaderButtons from "./HeaderButtons";
import Title from "./Title";

function Header() {
  return (
    <Stack component="header" sx={{ gap: 2 }}>
      <Title />
      <HeaderButtons />
    </Stack>
  );
}

export default Header;
