import { Stack } from "@mui/joy";
import HeaderButtons from "./HeaderButtons";
import Title from "./Title";

function Header() {
  return (
    <Stack
      component="header"
      sx={(theme) => ({
        marginX: 0,

        // shadow
        "--shadow-color":
          "color-mix(in srgb, var(--joy-palette-primary-800), transparent 90%)",
        boxShadow:
          "0 4px 6px -1px var(--shadow-color), 0 2px 4px -2px var(--shadow-color)",

        "--gradient-angle": "185deg",
        "--gradient-length": "90px",

        // prevent override of link hover styles
        "& .header-background:not(a:hover)": {
          background: "none",
        },

        // background gradient
        "--gradient-color-start": "var(--joy-palette-primary-200)",
        "--gradient-color-end":
          "color-mix(in srgb, var(--joy-palette-primary-100), var(--joy-palette-neutral-100) 75%)",

        [theme.getColorSchemeSelector("dark")]: {
          "--gradient-color-start":
            "color-mix(in srgb, var(--joy-palette-primary-900), var(--joy-palette-neutral-900) 30%)",
          "--gradient-color-end":
            "color-mix(in srgb, var(--joy-palette-primary-900), var(--joy-palette-neutral-900) 90%)",
        },

        background:
          "linear-gradient(var(--gradient-angle), var(--gradient-color-start) 0, var(--gradient-color-end) var(--gradient-length))",

        // text gradient
        "& h1": {
          "--gradient-color-start": "var(--joy-palette-primary-950)",
          "--gradient-color-end": "var(--joy-palette-primary-800)",

          [theme.getColorSchemeSelector("dark")]: {
            "--gradient-color-start": "var(--joy-palette-primary-200)",
            "--gradient-color-end": "var(--joy-palette-primary-50)",
          },

          background:
            "linear-gradient(var(--gradient-angle), var(--gradient-color-start) 0, var(--gradient-color-end) var(--gradient-length))",

          backgroundAttachment: "fixed",
          backgroundClip: "text",
          textFillColor: "transparent",
        },
      })}
    >
      <Title />
      <HeaderButtons />
    </Stack>
  );
}

export default Header;
