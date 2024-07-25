import { Stack } from "@mui/joy";
import { ReactNode } from "react";

interface SettingsLayoutProps {
  children: ReactNode;
}

function SettingsLayout({ children }: SettingsLayoutProps) {
  return <Stack sx={{ gap: 4 }}>{children}</Stack>;
}

export default SettingsLayout;
