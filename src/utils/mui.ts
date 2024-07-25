import { SxProps } from "@mui/joy/styles/types";

export function combineSx(...sx: (SxProps | undefined)[]): SxProps {
  return sx.map((sx) => sx ?? null).flat();
}
