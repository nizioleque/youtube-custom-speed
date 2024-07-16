import { SxProps, Theme } from "@mui/material";

export function combineSx<T extends Theme>(
  ...sx: (SxProps<T> | undefined)[]
): SxProps<T> {
  return sx.map((sx) => sx ?? null).flat();
}
