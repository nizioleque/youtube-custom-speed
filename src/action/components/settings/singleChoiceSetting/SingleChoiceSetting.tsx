import { RadioGroup } from "@mui/joy";
import { SingleChoiceOption } from "../../../../types/settings";
import {
  StorageSettings,
  StorageSettingsCustom,
} from "../../../../types/storage";
import Option from "./Option";

interface SingleChoiceSettingPropsBase<T extends keyof StorageSettings> {
  storageKey: T;
  options: SingleChoiceOption<StorageSettings[T]>[];
}

interface SingleChoiceSettingPropsPredefined<T extends keyof StorageSettings>
  extends SingleChoiceSettingPropsBase<T> {}

interface SingleChoiceSettingPropsCustom<T extends keyof StorageSettingsCustom>
  extends SingleChoiceSettingPropsBase<T> {
  transformCustomInput?: (newValue: string, oldValue: string) => string;
  parseCustomValue: (value: string) => StorageSettings[T]["customValue"];
  validateCustom?: (
    value: StorageSettings[T]["customValue"]
  ) => string | undefined;
}

export type SingleChoiceSettingProps<T extends keyof StorageSettings> =
  T extends keyof StorageSettingsCustom
    ? SingleChoiceSettingPropsCustom<T>
    : SingleChoiceSettingPropsPredefined<T>;

function SingleChoiceSetting<T extends keyof StorageSettings>(
  props: SingleChoiceSettingProps<T>
) {
  const { options, ...otherProps } = props;

  return (
    <RadioGroup>
      {options.map((option) => {
        const isCustomOption = option.type === "custom";
        const key = isCustomOption ? "custom" : `predefined-${option.value}`;

        return <Option key={key} option={option} {...otherProps} />;
      })}
    </RadioGroup>
  );
}

export default SingleChoiceSetting;
