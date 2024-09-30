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
    <button className="ytp-button" onClick={handleClick}>
      <Icon direction={direction} />
    </button>
  );
}

export default Button;
