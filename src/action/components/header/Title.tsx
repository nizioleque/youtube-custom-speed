import { Sheet, Typography } from "@mui/joy";

function Title() {
  return (
    <Sheet
      variant="soft"
      sx={{
        padding: 2,
        borderRadius: "lg",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        position: "relative",
        overflow: "hidden",
        gridArea: "title",
      }}
    >
      <Typography
        level="h2"
        sx={{
          fontWeight: "md",
          zIndex: 1,
          lineHeight: 1,
        }}
      >
        {chrome.i18n.getMessage("extName")}
      </Typography>
    </Sheet>
  );
}

export default Title;
