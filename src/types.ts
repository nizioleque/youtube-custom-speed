import { ComponentProps } from "react";

export interface RadioOptionData {
  label: string;
  value: string;
  custom?: boolean;
  customProps?: ComponentProps<"input">;
}

export interface SettingsOption {
  option: string;
  customValue: number;
}
