import { RadioOptionData } from "../../types";
import RadioOption from "./RadioOption";

interface OptionsProps {
  storageKey: string;
  options: RadioOptionData[];
}

function RadioOptions({ options, storageKey }: OptionsProps) {
  return options.map((option) => (
    <RadioOption key={option.value} storageKey={storageKey} option={option} />
  ));
}

export default RadioOptions;
