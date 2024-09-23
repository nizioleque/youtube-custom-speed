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

export interface StorageContent {
  newTabSpeed: SettingsOption;
  newViedoSpeed: SettingsOption;
  tabSync: SettingsOption;
}

export type PickByType<T, Value> = {
  [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};
