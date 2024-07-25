import { Stack, Typography } from "@mui/joy";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  tips?: string[];
  children: ReactNode;
}

function SettingsSection({ title, tips = [], children }: SectionProps) {
  // TODO adjust font styles

  return (
    <Stack sx={{ marginX: 2, gap: 1.5 }}>
      <Typography
      // variant="h2"
      >
        {title}
      </Typography>
      <div>
        {tips.map((tip) => (
          <Typography
            key={tip}
            //  variant="body2"
          >
            {tip}
          </Typography>
        ))}
      </div>
      {children}
    </Stack>
  );
}

export default SettingsSection;
