import { Stack, Typography } from "@mui/joy";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  tips?: string[];
  children: ReactNode;
}

function SettingsSection({ title, tips = [], children }: SectionProps) {
  return (
    <Stack sx={{ gap: 2 }}>
      <Stack>
        <Typography level="h4" gutterBottom>
          {title}
        </Typography>
        {tips.map((tip) => (
          <Typography key={tip}>{tip}</Typography>
        ))}
      </Stack>
      {children}
    </Stack>
  );
}

export default SettingsSection;
