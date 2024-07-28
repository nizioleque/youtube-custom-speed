import { FormControl, Input, Radio, Sheet } from "@mui/joy";
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
  // TODO add hover/select transition

  return (
    <Sheet
      sx={{
        paddingX: 2,
        paddingY: 1,
        borderRadius: "md",
        boxShadow: "sm",
        "--Input-minHeight": "2.25rem",
      }}
    >
      <Radio
        checked={checked}
        onChange={onChange}
        overlay
        disableIcon
        label={
          <>
            {option.label}
            {option.custom && (
              <FormControl>
                <Input
                  variant="soft"
                  sx={{ pointerEvents: "all" }}
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
          </>
        }
        slotProps={{
          label: ({ checked }) => ({
            sx: {
              fontWeight: "lg",
              fontSize: "md",
              color: checked ? "text.primary" : "text.secondary",

              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: option.custom ? "baseline" : "center",
              minHeight: "var(--Input-minHeight)",
            },
          }),
          action: ({ checked }) => ({
            sx: (theme) => ({
              ...(checked && {
                "--variant-borderWidth": "2px",
                "&&": {
                  // && to increase the specificity to win the base :hover styles
                  borderColor: theme.vars.palette.primary[500],
                },
              }),
            }),
          }),
        }}
      />
    </Sheet>
  );
}

export default RadioOption;
