import { FormControlLabel, Radio, TextField, Typography } from "@mui/material";
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
      sx={{
        display: "grid",
        gridTemplateAreas: '"radio label" ". field"',
        gridTemplateColumns: "auto 1fr",
        justifyItems: "start",
      }}
      control={
        <Radio
          checked={checked}
          onChange={onChange}
          sx={{ gridArea: "radio", paddingY: "6px" }}
        />
      }
      disableTypography
      label={
        <>
          <Typography component="span" sx={{ gridArea: "label" }}>
            {option.label}
          </Typography>
          {option.custom && (
            <TextField
              sx={{ gridArea: "field", marginBottom: 1 }}
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
        </>
      }
    />
  );
}

export default RadioOption;
