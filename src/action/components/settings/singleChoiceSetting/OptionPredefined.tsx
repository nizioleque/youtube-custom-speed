import { useStorage } from "../../../../hooks/useStorage";
import {
  SingleChoiceOptionPredefined,
  SingleChoiceSettingAny,
} from "../../../../types/settings";
import { StorageSettings } from "../../../../types/storage";
import { OptionProps } from "./Option";
import Radio from "./Radio";

function OptionPredefined<T extends keyof StorageSettings>({
  option,
  storageKey,
}: OptionProps<T, SingleChoiceOptionPredefined<SingleChoiceSettingAny>>) {
  const [storageValue, setStorageValue] = useStorage(storageKey, null);

  if (storageValue === null) return null;

  const isCustomizable = "customValue" in storageValue;
  const checked = isCustomizable
    ? option.value === storageValue.selectedOption &&
      !storageValue.isCustomSelected
    : option.value === storageValue.selectedOption;

  const handleChange = () => {
    setStorageValue((current) => {
      if (!current) return current;

      if (isCustomizable) {
        return {
          ...current,
          selectedOption: option.value,
          isCustomSelected: false,
        };
      }

      return {
        ...current,
        selectedOption: option.value,
      };
    });
  };

  return (
    <Radio label={option.label} checked={checked} onChange={handleChange} />
  );
}

export default OptionPredefined;
