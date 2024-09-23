import { RadioGroup } from "@mui/joy";
import { useStorage } from "../../../hooks/useStorage";
import {
  PickByType,
  RadioOptionData,
  SettingsOption,
  StorageContent,
} from "../../../types";
import RadioOption from "./RadioOption";

type StorageSettings = PickByType<StorageContent, SettingsOption>;

interface OptionsProps {
  storageKey: keyof StorageSettings;
  options: RadioOptionData[];
}

function RadioOptions({ options, storageKey }: OptionsProps) {
  const [{ option: selectedOption, customValue }, setValue] =
    useStorage<SettingsOption>(storageKey, {
      option: "",
      customValue: 0,
    });

  return (
    <RadioGroup>
      {options.map((option) => (
        <RadioOption
          key={option.value}
          option={option}
          checked={option.value === selectedOption}
          customValue={customValue}
          onChange={() =>
            setValue((current) => ({ ...current, option: option.value }))
          }
          onChangeCustom={(customValue) =>
            setValue((current) => ({ ...current, customValue }))
          }
        />
      ))}
    </RadioGroup>
  );
}

export default RadioOptions;
