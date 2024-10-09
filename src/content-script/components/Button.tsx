import { Box } from "@mui/joy";
import useSetSpeed from "../hooks/useSetSpeed";
import Icon from "./Icon";

interface ButtonProps {
  direction: "back" | "forward";
}

function Button({ direction }: ButtonProps) {
  const { decreaseSpeed, increaseSpeed } = useSetSpeed();

  const handleClick = () => {
    if (direction === "forward") increaseSpeed();
    else decreaseSpeed();
  };

  return (
    <Box
      component="button"
      className="ytp-button"
      onClick={handleClick}
      sx={{
        "&&": {
          height: "auto",
          width: 42,
        },
      }}
    >
      <Icon direction={direction} />
    </Box>
  );
}

export default Button;
