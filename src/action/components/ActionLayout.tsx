import { Stack } from "@mui/material";
import { ReactNode } from "react";
import Header from "./header/Header";

interface ActionLayoutProps {
  children: ReactNode;
}

function ActionLayout({ children }: ActionLayoutProps) {
  return (
    <Stack
      sx={{
        minWidth: 420,
        gap: 3,
      }}
    >
      <Header />
      <div>{children}</div>
    </Stack>
  );
}

export default ActionLayout;
