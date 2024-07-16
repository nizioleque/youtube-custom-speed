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
        },
        props.sx
      )}
    />
  );
}

export default HeaderButton;
