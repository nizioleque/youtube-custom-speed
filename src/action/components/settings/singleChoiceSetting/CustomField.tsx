import { SingleChoiceOptionCustom } from "@/types/settings";
import { StorageSettings, StorageSettingsCustom } from "@/types/storage";
import { FormControl, FormHelperText, Input } from "@mui/joy";
import { ChangeEvent, useState } from "react";
import { OptionProps } from "./Option";

type CustomFieldProps<T extends keyof StorageSettingsCustom> = OptionProps<
  T,
  SingleChoiceOptionCustom
> & {
  onChange: (value: StorageSettings[T]["customValue"]) => void;
  initialValue: StorageSettings[T]["customValue"];
};

function CustomField<T extends keyof StorageSettingsCustom>({
  onChange,
  initialValue,
  transformCustomInput = (value) => value,
  parseCustomValue,
  validateCustom = () => undefined,
}: CustomFieldProps<T>) {
  const [value, setValue] = useState<string>(initialValue.toString());
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // update text field value
    let newValue = event.currentTarget.value;
    newValue = transformCustomInput(newValue, value);
    if (newValue === value) return;

    setError(null);
    setValue(newValue);

    // update storage value
    const newValueParsed = parseCustomValue(newValue);
    const errorMessage = validateCustom(newValueParsed);

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    onChange(newValueParsed);
  };

  return (
    <FormHelperText>
      <FormControl error={error !== null}>
        <Input
          size="sm"
          value={value}
          placeholder="Custom value"
          onChange={handleChange}
          sx={{ width: 100 }}
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </FormHelperText>
  );
}

export default CustomField;
