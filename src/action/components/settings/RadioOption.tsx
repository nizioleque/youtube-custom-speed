import { FormControl, FormHelperText, Input, Radio } from "@mui/joy";
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
  // TODO fix passing props (min max step type)

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
        <FormHelperText
          sx={{
            margin: "var(--FormHelperText-margin)",
          }}
        >
          <FormControl>
            <Input
              size="sm"
              value={customValue}
              onFocus={onChange}
              onChange={(event) =>
                // TODO support integers? (eg. add `transform` prop)
                onChangeCustom(parseFloat(event.currentTarget.value))
              }
              // inputProps={option.customProps}
            />
          </FormControl>
        </FormHelperText>
      )}
    </>
  );
}

export default RadioOption;
