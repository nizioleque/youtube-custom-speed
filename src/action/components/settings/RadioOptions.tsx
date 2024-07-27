import { RadioGroup } from "@mui/joy";
import { useStorage } from "../../../hooks/useStorage";
import { RadioOptionData, SettingsOption } from "../../../types";
import RadioOption from "./RadioOption";

interface OptionsProps {
  storageKey: string;
  options: RadioOptionData[];
}

function RadioOptions({ options, storageKey }: OptionsProps) {
  const [{ option: selectedOption, customValue }, setValue] =
    useStorage<SettingsOption>(storageKey, {
      option: "",
      customValue: 0,
    });

  return (
    <RadioGroup sx={{ gap: 1.5, padding: "1px" }}>
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
