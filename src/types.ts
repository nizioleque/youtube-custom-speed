interface RadioOptionDataBase {
  label: string;
}

interface RadioOptionDataPredefined<Option extends SettingsOptionAny>
  extends RadioOptionDataBase {
  type?: "predefined";
  value: Option["selectedOption"];
}

interface RadioOptionDataCustom extends RadioOptionDataBase {
  type: "custom";
}

export type RadioOptionData<Option extends SettingsOptionAny> =
  Option extends SettingsOptionCustom<unknown, unknown>
    ? RadioOptionDataCustom | RadioOptionDataPredefined<Option>
    : RadioOptionDataPredefined<Option>;

interface SettingsOptionPredefinedBase<Value> {
  selectedOption: Value;
}

interface SettingsOptionPredefined<Value>
  extends SettingsOptionPredefinedBase<Value> {}

interface SettingsOptionCustom<Value, CustomValue>
  extends SettingsOptionPredefinedBase<Value> {
  isCustomSelected: boolean;
  customValue: CustomValue;
}

export type SettingsOption<
  Value,
  CustomValue = undefined,
> = CustomValue extends undefined
  ? SettingsOptionPredefined<Value>
  : SettingsOptionCustom<Value, CustomValue>;

export type SettingsOptionAny =
  | SettingsOptionPredefined<unknown>
  | SettingsOptionCustom<unknown, unknown>;

export interface StorageContent {
  currentSpeed: number;
  speedList: number[];
  newTabSpeed: SettingsOption<"normal" | "last" | "doNothing", number>;
  newVideoSpeed: SettingsOption<"restore" | "keep" | "doNothing">;
  tabSync: SettingsOption<"noSync" | "sync">;
}

export type PickByType<T, Value> = {
  [P in keyof T as T[P] extends Value ? P : never]: T[P];
};
