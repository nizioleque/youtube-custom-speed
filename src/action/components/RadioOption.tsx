import type { RadioOptionData } from "../../types";

interface RadioOptionProps {
  storageKey: string;
  option: RadioOptionData;
  checked: boolean;
  onChange: () => void;
}

function RadioOption({
  storageKey,
  option,
  checked,
  onChange,
}: RadioOptionProps) {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange} />
      {option.label}
      {option.custom && (
        <input
          className="input-custom"
          // TODO handle saving custom value
          // name="customSpeed"
          data-setting-name={storageKey}
          {...option.customProps}
        />
      )}
    </label>
  );
}

export default RadioOption;
