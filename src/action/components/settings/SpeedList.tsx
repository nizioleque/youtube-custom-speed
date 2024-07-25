import {
  Box,
  Button,
  Chip,
  ChipDelete,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@mui/joy";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useStorage } from "../../../hooks/useStorage";

// TODO fix HTML (nested form elements?)
// TODO add delete/add animation
// TODO fix passing props (min max step type)
// TODO clear text field after adding

function SpeedList() {
  const [speedList, setSpeedList] = useStorage<number[]>("speedList", []);
  const [newValue, setNewValue] = useState<number | undefined>();

  const handleAdd = () => {
    setSpeedList((current) => {
      if (newValue === undefined || current.includes(newValue)) return current;
      return [...current, newValue].toSorted((a, b) => a - b);
    });
  };

  const handleDelete = (value: number) => {
    setSpeedList((current) => current.filter((speed) => speed !== value));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    if (value === "") setNewValue(undefined);
    else setNewValue(parseFloat(value));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") handleAdd();
  };

  return (
    <Stack sx={{ gap: 2 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {speedList.map((speed) => (
          <Chip
            key={speed}
            endDecorator={<ChipDelete onDelete={() => handleDelete(speed)} />}
          >
            {`${speed}x`}
          </Chip>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <FormControl>
          <FormLabel></FormLabel>

          <Input
            value={newValue ?? ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </FormControl>

        {/* <TextField
          size="small"
          inputProps={{
            type: "number",
            min: 0.1,
            max: 16,
            step: 0.1,
          }}
        /> */}
        <Button onClick={handleAdd}>Add</Button>
      </Box>
      {/* TODO add error handling */}
      {/* <p id="add-error">
        The value is not in the supported playback range (0.0625x - 16x)
      </p> */}
    </Stack>
  );
}

export default SpeedList;
