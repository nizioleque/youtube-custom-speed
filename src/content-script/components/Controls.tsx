import { Box } from "@mui/joy";
import { Dispatch, SetStateAction } from "react";
import useCurrentSpeed from "../hooks/useCurrentSpeed";
import Button from "./Button";

interface ControlsProps {
  setIsTextHover: Dispatch<SetStateAction<boolean>>;
}

function Controls({ setIsTextHover }: ControlsProps) {
  // TODO fix font color

  const currentSpeed = useCurrentSpeed();

  return (
    <Box
      sx={{
        display: "inline-flex",
        height: "100%",
        userSelect: "none",
      }}
    >
      <Button direction="back" />

      <Box
        onMouseEnter={() => setIsTextHover(true)}
        onMouseLeave={() => setIsTextHover(false)}
        sx={{
          display: "grid",
          placeItems: "center",
          zIndex: 41,
          "& > *": {
            gridArea: "1 / 1",
          },
        }}
      >
        {/* ensure text width does not change when switching options */}
        <Box
          component="span"
          className="ytp-time-display"
          sx={{ visibility: "hidden" }}
        >
          9.99x
        </Box>
        <Box component="span" className="ytp-time-display">
          {currentSpeed}x
        </Box>
      </Box>

      <Button direction="forward" />
    </Box>
  );
}

export default Controls;
