/* eslint-disable react/prop-types */

import { useStorage } from "@/hooks/useStorage";
import { SingleChoiceOptionCustom } from "@/types/settings";
import { StorageSettings, StorageSettingsCustom } from "@/types/storage";
import CustomField from "./CustomField";
import { OptionProps } from "./Option";
import Radio from "./Radio";

function OptionCustom<T extends keyof StorageSettings>(
  _props: OptionProps<T, SingleChoiceOptionCustom>
) {
  const [storageValue, setStorageValue] = useStorage(_props.storageKey, null);

  if (storageValue === null) return null;

  if (!("customValue" in storageValue)) {
    // custom value can only be applied to customizable settings
    throw new Error("Non-customizable setting cannot have a custom value");
  }

  // by this point, we know that `storageValue` is of type `StorageSettingsCustom`
  const props = _props as unknown as OptionProps<
    keyof StorageSettingsCustom,
    SingleChoiceOptionCustom
  >;

  const handleChange = () => {
    setStorageValue((current) => {
      if (!current) return current;
      return { ...current, isCustomSelected: true };
    });
  };

  const handleCustomChange = (customValue: typeof storageValue.customValue) => {
    setStorageValue((current) => {
      if (!current) return current;
      return { ...current, customValue };
    });
  };

  return (
    <Radio
      label={props.option.label}
      checked={storageValue.isCustomSelected}
      onChange={handleChange}
    >
      <CustomField
        {...props}
        onChange={handleCustomChange}
        initialValue={storageValue.customValue}
      />
    </Radio>
  );
}

export default OptionCustom;
