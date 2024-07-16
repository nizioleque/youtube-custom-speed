import { Box, FormControlLabel, Radio, TextField } from "@mui/material";
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
  return (
    <FormControlLabel
      control={<Radio checked={checked} onChange={onChange} />}
      label={
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {option.label}
          {option.custom && (
            <TextField
              value={customValue}
              onFocus={onChange}
              size="small"
              onChange={(event) =>
                // TODO support integers? (eg. add `transform` prop)
                onChangeCustom(parseFloat(event.currentTarget.value))
              }
              inputProps={option.customProps}
            />
          )}
        </Box>
      }
    />
  );
}

export default RadioOption;
