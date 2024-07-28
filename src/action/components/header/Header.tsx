import { Stack } from "@mui/joy";
import HeaderButtons from "./HeaderButtons";
import Title from "./Title";

function Header() {
  return (
    <Stack
      component="header"
      sx={{
        display: "grid",
        gridTemplateAreas: '"title title title" "button1 button2 button3"',
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2px",
      }}
    >
      <Title />
      <HeaderButtons />
    </Stack>
  );
}

export default Header;
