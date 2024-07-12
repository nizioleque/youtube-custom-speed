import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  tips?: string[];
  children: ReactNode;
}

function Section({ title, tips = [], children }: SectionProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="tip-h2">
        {tips.map((tip) => (
          <Typography key={tip}>{tip}</Typography>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Section;
