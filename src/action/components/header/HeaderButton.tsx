import { Button } from "@mui/joy";
import { ReactNode } from "react";

interface HeaderButtonProps {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}

function HeaderButton({ href, children, icon }: HeaderButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      variant="soft"
      color="neutral"
      target="_blank"
      startDecorator={icon}
      sx={{
        flex: 1,
        borderRadius: 0,
      }}
    >
      {children}
    </Button>
  );
}

export default HeaderButton;
