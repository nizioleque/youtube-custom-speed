import { Box, Sheet, Typography } from "@mui/joy";

function Title() {
  return (
    <Sheet
      className="header-background"
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        component="img"
        src="/static/icon128.png"
        height={40}
        width={40}
        sx={{
          "--shadow-color":
            "color-mix(in srgb, var(--joy-palette-primary-800), transparent 93%)",
          filter:
            "drop-shadow(0 4px 3px var(--shadow-color)) drop-shadow(0 2px 2px var(--shadow-color))",
        }}
      />
      <Typography level="h3" sx={{ fontWeight: 700 }}>
        {chrome.i18n.getMessage("extName")}
      </Typography>
    </Sheet>
  );
}

export default Title;
