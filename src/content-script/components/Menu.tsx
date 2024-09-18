import { Box } from "@mui/joy";

interface MenuProps {
  isOpen: boolean;
}

function Menu({ isOpen }: MenuProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      Menu
    </Box>
  );
}

export default Menu;
