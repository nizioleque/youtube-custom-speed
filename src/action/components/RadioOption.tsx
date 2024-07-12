import type { RadioOptionData } from "../../types";

interface RadioOptionProps {
  storageKey: string;
  option: RadioOptionData;
}

function RadioOption({ storageKey, option }: RadioOptionProps) {
  return (
    <label>
      <input type="radio" name={storageKey} value={option.value} />
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
