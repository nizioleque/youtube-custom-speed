import { Box, Stack } from "@mui/joy";
import { ReactNode } from "react";
import Header from "./header/Header";

interface ActionLayoutProps {
  children: ReactNode;
}

function ActionLayout({ children }: ActionLayoutProps) {
  // TODO fix width inside chrome://extensions
  // TODO fix resize after opening action

  return (
    <Stack
      sx={{
        minWidth: 420,
        "& > *": {
          marginX: 2,
        },
      }}
    >
      <Header />
      <Box sx={{ paddingY: 3 }}>{children}</Box>
    </Stack>
  );
}

export default ActionLayout;
