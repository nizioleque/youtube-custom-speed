import {
  Box,
  Button,
  Chip,
  ChipDelete,
  FormControl,
  Input,
  Stack,
} from "@mui/joy";
import { ChangeEvent, FormEvent, useState } from "react";
import { useStorage } from "../../../hooks/useStorage";

function SpeedList() {
  const [speedList, setSpeedList] = useStorage<number[]>("speedList", []);
  const [newValue, setNewValue] = useState<string>("");

  const handleAdd = () => {
    const valueParsed = parseFloat(newValue.replace(",", "."));
    if (isNaN(valueParsed)) return;

    setSpeedList((current) => {
      if (current.includes(valueParsed)) return current;
      // TODO show message if value already exists
      // TODO show message if value is out of range
      return [...current, valueParsed].toSorted((a, b) => a - b);
    });
    setNewValue("");
  };

  const handleDelete = (value: number) => {
    setSpeedList((current) => current.filter((speed) => speed !== value));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const isValid = /^[0-9]*[,.]?[0-9]*$/.test(value);
    if (isValid) setNewValue(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAdd();
  };

  return (
    <Stack sx={{ gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: 1.5,
          columnGap: 2,
          justifyContent: "space-between",
          "& > :last-child": {
            marginRight: "auto",
          },
        }}
      >
        {speedList.map((speed) => (
          <Chip
            key={speed}
            size="lg"
            endDecorator={<ChipDelete onDelete={() => handleDelete(speed)} />}
          >
            {`${speed}x`}
          </Chip>
        ))}
      </Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Input
              value={newValue ?? ""}
              onChange={handleChange}
              endDecorator={<Button onClick={handleAdd}>Add</Button>}
              placeholder="Add new"
            />
          </FormControl>
        </form>
      </Box>

      {/* TODO add error handling */}
      {/* <p id="add-error">
        The value is not in the supported playback range (0.0625x - 16x)
      </p> */}
    </Stack>
  );
}

export default SpeedList;
