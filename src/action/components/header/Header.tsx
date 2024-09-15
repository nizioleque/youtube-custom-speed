import { Stack } from "@mui/joy";
import HeaderButtons from "./HeaderButtons";
import Title from "./Title";

function Header() {
  return (
    <Stack
      component="header"
      sx={{
        marginX: 0,
        gap: "2px",
      }}
    >
      <Title />
      <HeaderButtons />
    </Stack>
  );
}

export default Header;
