import { SingleChoiceOption, SingleChoiceSettingAny } from "@/types/settings";
import { StorageSettings } from "@/types/storage";
import OptionCustom from "./OptionCustom";
import OptionPredefined from "./OptionPredefined";
import { SingleChoiceSettingProps } from "./SingleChoiceSetting";

export type OptionProps<
  T extends keyof StorageSettings,
  Option extends
    SingleChoiceOption<SingleChoiceSettingAny> = SingleChoiceOption<SingleChoiceSettingAny>,
> = Omit<SingleChoiceSettingProps<T>, "options"> & {
  option: Option;
};

function Option<T extends keyof StorageSettings>(props: OptionProps<T>) {
  const { option } = props;

  const isCustomOption = option.type === "custom";

  // `option` needs to be passed separately for type checks
  if (isCustomOption) return <OptionCustom {...props} option={option} />;
  return <OptionPredefined {...props} option={option} />;
}

export default Option;
