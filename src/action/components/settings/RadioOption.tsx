import { FormControl, FormLabel, Input, Radio, Typography } from "@mui/joy";
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
  // TODO check if HTML is correct (FormControl)
  // TODO center input
  // TODO fix off-center dot inside radio
  // TODO fix passing props (min max step type)

  return (
    <FormControl
      sx={{
        display: "grid",
        gridTemplateAreas: '"radio label" ". field"',
        gridTemplateColumns: "auto 1fr",
        justifyItems: "start",
      }}
    >
      <FormLabel>
        <Typography component="span" sx={{ gridArea: "label" }}>
          {option.label}
        </Typography>
        {option.custom && (
          <FormControl sx={{ gridArea: "field", marginBottom: 1 }}>
            <Input
              value={customValue}
              onFocus={onChange}
              onChange={(event) =>
                // TODO support integers? (eg. add `transform` prop)
                onChangeCustom(parseFloat(event.currentTarget.value))
              }
              // inputProps={option.customProps}
            />
          </FormControl>
        )}
      </FormLabel>

      <Radio
        checked={checked}
        onChange={onChange}
        sx={{ gridArea: "radio", paddingY: "6px" }}
      />
    </FormControl>
  );
}

export default RadioOption;
