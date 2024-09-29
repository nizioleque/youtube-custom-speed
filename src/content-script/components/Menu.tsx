import { Box } from "@mui/joy";
import { useStorage } from "../../hooks/useStorage";
import useCurrentSpeed from "../hooks/useCurrentSpeed";
import useSetSpeed from "../hooks/useSetSpeed";

interface MenuProps {
  isOpen: boolean;
}

function Menu({ isOpen }: MenuProps) {
  // TODO add other styles from the settings popup (transition, shadow, etc.)

  const [speedList] = useStorage("speedList", [] as number[]);

  const currentSpeed = useCurrentSpeed();
  const setSpeed = useSetSpeed();

  return (
    <Box
      component="ul"
      sx={{
        position: "absolute",
        bottom: "100%",
        zIndex: 32,

        paddingY: 1,
        borderRadius: "md",

        color: "#eee",
        backgroundColor: "rgb(28 28 28 / 0.9)",
        textAlign: "center",
      }}
    >
      {speedList.map((speed) => {
        const isActive = speed === currentSpeed;

        return (
          <Box
            component="li"
            key={speed}
            aria-current={isActive}
            onClick={() => setSpeed(speed)}
            sx={{
              listStyleType: "none",
              paddingX: 2,

              // the .003 is necessary to correct YouTube's imprecise font size
              // 109% of 11 is 11.99, not 12, which causes the line height to be off
              lineHeight: 2.003,

              backgroundColor: isActive ? "rgb(255 255 255 / 0.2)" : null,
              "&:hover": {
                backgroundColor: isActive ? null : "rgb(255 255 255 / 0.1)",
              },
            }}
          >
            {speed}x
          </Box>
        );
      })}
    </Box>
  );
}

export default Menu;
