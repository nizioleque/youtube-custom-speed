import { Box, Sheet, Typography } from "@mui/joy";

function Title() {
  return (
    <Sheet
      variant="soft"
      sx={{
        padding: 2,
        marginTop: -2,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box component="img" src="/static/icon128.png" height={40} width={40} />
      <Typography level="h3">{chrome.i18n.getMessage("extName")}</Typography>
    </Sheet>
  );
}

export default Title;
