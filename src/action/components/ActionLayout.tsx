import { Box } from "@mui/material";
import { ReactNode } from "react";
import Header from "./header/Header";

interface ActionLayoutProps {
  children: ReactNode;
}

function ActionLayout({ children }: ActionLayoutProps) {
  return (
    <Box
      sx={{
        minWidth: 420,
      }}
    >
      <Header />
      {children}
    </Box>
  );
}

export default ActionLayout;
