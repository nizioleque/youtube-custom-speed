import { RadioGroup } from "@mui/joy";
import { useStorage } from "../../../hooks/useStorage";
import {
  PickByType,
  RadioOptionData,
  SettingsOptionAny,
  StorageContent,
} from "../../../types";
import RadioOption from "./RadioOption";

type StorageSettings = PickByType<StorageContent, SettingsOptionAny>;

interface OptionsProps<T extends keyof StorageSettings> {
  storageKey: T;
  options: RadioOptionData<StorageSettings[T]>[];
}

function RadioOptions<T extends keyof StorageSettings>({
  options,
  storageKey,
}: OptionsProps<T>) {
  const [value, setValue] = useStorage<StorageSettings[T] | null>(
    storageKey,
    null
  );

  // TODO check if this is necessary
  if (value === null) return null;

  const selectedOption = value.selectedOption;
  const isCustomizable = "customValue" in value;
  const isCustomSelected = isCustomizable && value.isCustomSelected;
  const customValue = isCustomizable ? value.customValue : undefined;

  return (
    <RadioGroup>
      {options.map((option) => {
        const isCustom = option.type === "custom";
        const key = isCustom ? "custom" : `predefined-${option.value}`;
        const checked = isCustom
          ? isCustomSelected
          : option.value === selectedOption;

        return (
          <RadioOption
            key={key}
            label={option.label}
            isCustom={isCustom}
            checked={checked}
            customValue={customValue}
            // TODO fix
            onChange={() =>
              setValue((current) => ({
                ...current,
                selectedOption: option.value,
              }))
            }
            onChangeCustom={(customValue) =>
              setValue((current) => ({ ...current, customValue }))
            }
          />
        );
      })}
    </RadioGroup>
  );
}

export default RadioOptions;
