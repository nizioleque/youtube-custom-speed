import { Button, SvgIcon } from "@mui/joy";
import { FunctionComponent, ReactNode } from "react";

interface HeaderButtonProps {
  href: string;
  children: ReactNode;
  icon: FunctionComponent;
}

function HeaderButton({ href, children, icon: Icon }: HeaderButtonProps) {
  return (
    <Button
      className="header-background"
      component="a"
      href={href}
      variant="soft"
      target="_blank"
      size="sm"
      startDecorator={
        <SvgIcon component={Icon} inheritViewBox sx={{ fontSize: 18 }} />
      }
    >
      {children}
    </Button>
  );
}

export default HeaderButton;
