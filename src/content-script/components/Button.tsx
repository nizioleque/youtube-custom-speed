import useSetSpeed from "../hooks/useSetSpeed";

interface ButtonProps {
  direction: "back" | "forward";
}

const PathBack = "M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z";
const PathForward =
  "M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z";

function Button({ direction }: ButtonProps) {
  // TODO add shadow
  const { decreaseSpeed, increaseSpeed } = useSetSpeed();

  const handleClick = () => {
    if (direction === "forward") increaseSpeed();
    else decreaseSpeed();
  };

  return (
    <button className="ytp-button" onClick={handleClick}>
      <svg height="100%" viewBox="0 0 36 36" width="100%">
        <use className="ytp-svg-shadow" />
        <path
          className="ytp-svg-fill"
          d={direction === "back" ? PathBack : PathForward}
        />
      </svg>
    </button>
  );
}

export default Button;
