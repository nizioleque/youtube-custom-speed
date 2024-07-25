import { Button, ButtonProps } from "@mui/joy";

function HeaderButton(props: ButtonProps<"a">) {
  return (
    <Button component="a" variant="soft" size="sm" target="_blank" {...props} />
  );
}

export default HeaderButton;
