import { Typography } from "@mui/material";

const BottomBackgroundOffset = 2;

function Title() {
  return (
    <Typography
      variant="h1"
      sx={{
        color: "white",
        background:
          "linear-gradient(180deg, rgb(255 0 0 / 100%) 0%, rgb(255 0 0 / 20%) 75%, rgb(255 0 0 / 0%) 100%)",
        paddingY: 0.5,
        paddingBottom: 0.5 + BottomBackgroundOffset,
        marginBottom: -BottomBackgroundOffset,
        textAlign: "center",
        textShadow: "0 0 4px rgba(0,0,0,0.8)",
      }}
    >
      {chrome.i18n.getMessage("extName")}
    </Typography>
  );
}

export default Title;
