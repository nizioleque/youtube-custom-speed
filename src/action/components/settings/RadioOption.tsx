import { FormControl, FormHelperText, Input, Radio } from "@mui/joy";
import { ChangeEvent, useEffect, useState } from "react";
import type { RadioOptionData } from "../../../types";

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
  const [value, setValue] = useState<string>(customValue.toString());
  const [error, setError] = useState<string | null>(null);

  // make sure the text field doesn't show the default value (0)
  useEffect(() => {
    setValue(customValue.toString());
  }, [customValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);

    // update text field value
    const value = event.currentTarget.value;

    const isValid = /^[0-9]*[,.]?[0-9]*$/.test(value);
    if (isValid) setValue(value);

    // update storage value
    const valueParsed = parseFloat(value.replace(",", "."));

    if (isNaN(valueParsed)) {
      setError("Invalid number");
      return;
    }

    if (valueParsed < 0.0625 || valueParsed > 16) {
      setError("Value is out of range (0.0625x - 16x)");
      return;
    }

    // TODO support integers? (eg. add `transform` prop)
    onChangeCustom(valueParsed);
  };

  return (
    <>
      <Radio
        checked={checked}
        onChange={onChange}
        label={option.label}
        sx={{
          "&:not(:first-of-type)": {
            marginBlockStart: "var(--RadioGroup-gap)",
          },
        }}
      />
      {option.custom && (
        <FormHelperText sx={{ margin: "var(--FormHelperText-margin)" }}>
          <FormControl error={error !== null}>
            <Input
              size="sm"
              value={value}
              placeholder="Custom value"
              onFocus={onChange}
              onChange={handleChange}
              sx={{ width: 100 }}
            />
            {error && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        </FormHelperText>
      )}
    </>
  );
}

export default RadioOption;
