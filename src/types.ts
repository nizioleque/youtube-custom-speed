import { ComponentProps } from "react";

export interface RadioOptionData {
  label: string;
  value: string;
  custom?: boolean;
  customProps?: ComponentProps<"input">;
}
