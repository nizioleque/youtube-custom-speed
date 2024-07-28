import { Stack } from "@mui/joy";
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
        paddingY: 2,
        "& > *": {
          marginX: 2,
        },
      }}
    >
      <Header />
      <div>{children}</div>
    </Stack>
  );
}

export default ActionLayout;
