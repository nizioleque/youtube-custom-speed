import { Button, ButtonProps } from "@mui/material";
import { combineSx } from "../../../utils/mui";

function HeaderButton(props: ButtonProps) {
  return (
    <Button
      component="a"
      variant="outlined"
      size="small"
      target="_blank"
      {...props}
      sx={combineSx(
        {
          borderRadius: 999,
          color: "text.primary",
          fontSize: "1rem",
          borderWidth: "2px !important",
          textTransform: "none",
        },
        props.sx
      )}
    />
  );
}

export default HeaderButton;
