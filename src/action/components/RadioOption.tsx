import type { RadioOptionData } from "../../types";

interface RadioOptionProps {
  option: RadioOptionData;
  checked: boolean;
  customValue: number;
  onChange: () => void;
  onChangeCustom: (value: number) => void;
}

function RadioOption({
  option,
  checked,
  customValue,
  onChange,
  onChangeCustom,
}: RadioOptionProps) {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange} />
      {option.label}
      {option.custom && (
        <input
          value={customValue}
          onChange={(event) =>
            // TODO support integers? (eg. add `transform` prop)
            onChangeCustom(parseFloat(event.currentTarget.value))
          }
          {...option.customProps}
        />
      )}
    </label>
  );
}

export default RadioOption;
