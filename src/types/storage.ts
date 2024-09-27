import {
  SingleChoiceSettingAny,
  SingleChoiceSettingCustomAny,
  SingleChoiceSettingStorage,
} from "./settings";
import { PickByType } from "./utils";

export interface StorageContent {
  currentSpeed: number;
  speedList: number[];
  newTabSpeed: SingleChoiceSettingStorage<
    "normal" | "last" | "doNothing",
    number
  >;
  newVideoSpeed: SingleChoiceSettingStorage<"restore" | "keep" | "doNothing">;
  tabSync: SingleChoiceSettingStorage<"noSync" | "sync">;
}

export type StorageSettings = PickByType<
  StorageContent,
  SingleChoiceSettingAny
>;
export type StorageSettingsCustom = PickByType<
  StorageContent,
  SingleChoiceSettingCustomAny
>;
