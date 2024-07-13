import { useStorage } from "../../hooks/useStorage";
import { RadioOptionData } from "../../types";
import RadioOption from "./RadioOption";

interface OptionsProps {
  storageKey: string;
  options: RadioOptionData[];
}

function RadioOptions({ options, storageKey }: OptionsProps) {
  const [value, setValue] = useStorage<string | undefined>(
    storageKey,
    undefined
  );

  // TODO set option when custom input is focused

  return options.map((option) => (
    <RadioOption
      key={option.value}
      storageKey={storageKey}
      option={option}
      checked={option.value === value}
      onChange={() => setValue(option.value)}
    />
  ));
}

export default RadioOptions;
