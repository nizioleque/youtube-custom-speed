import { Box, Radio as JoyRadio } from "@mui/joy";
import { ReactNode } from "react";

interface RadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  children?: ReactNode;
}

function Radio({ label, checked, onChange, children }: RadioProps) {
  return (
    <>
      <JoyRadio
        checked={checked}
        onChange={onChange}
        label={label}
        sx={{
          "&:not(:first-of-type)": {
            marginBlockStart: "var(--RadioGroup-gap)",
          },
        }}
      />
      <Box onFocus={onChange}>{children}</Box>
    </>
  );
}

export default Radio;
