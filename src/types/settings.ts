interface SingleChoiceOptionBase {
  label: string;
}

export interface SingleChoiceOptionPredefined<
  Option extends SingleChoiceSettingAny,
> extends SingleChoiceOptionBase {
  type?: "predefined";
  value: Option["selectedOption"];
}

export interface SingleChoiceOptionCustom extends SingleChoiceOptionBase {
  type: "custom";
}

export type SingleChoiceOption<Option extends SingleChoiceSettingAny> =
  Option extends SingleChoiceSettingStorageCustom<unknown, unknown>
    ? SingleChoiceOptionCustom | SingleChoiceOptionPredefined<Option>
    : SingleChoiceOptionPredefined<Option>;

interface SingleChoiceSettingStorageBase<Value> {
  selectedOption: Value;
}

export interface SingleChoiceSettingStoragePredefined<Value>
  extends SingleChoiceSettingStorageBase<Value> {}

export interface SingleChoiceSettingStorageCustom<Value, CustomValue>
  extends SingleChoiceSettingStorageBase<Value> {
  isCustomSelected: boolean;
  customValue: CustomValue;
}

export type SingleChoiceSettingStorage<
  Value,
  CustomValue extends { toString: () => string } | undefined = undefined,
> = CustomValue extends undefined
  ? SingleChoiceSettingStoragePredefined<Value>
  : SingleChoiceSettingStorageCustom<Value, CustomValue>;

export type SingleChoiceSettingCustomAny = SingleChoiceSettingStorageCustom<
  unknown,
  unknown
>;
export type SingleChoiceSettingPredefinedAny =
  SingleChoiceSettingStoragePredefined<unknown>;
export type SingleChoiceSettingAny =
  | SingleChoiceSettingCustomAny
  | SingleChoiceSettingPredefinedAny;
