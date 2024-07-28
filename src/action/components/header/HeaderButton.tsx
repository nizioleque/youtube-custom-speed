import { Button } from "@mui/joy";
import { ReactNode } from "react";

interface HeaderButtonProps {
  href: string;
  children: ReactNode;
}

function HeaderButton({ href, children }: HeaderButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      variant="soft"
      color="neutral"
      size="sm"
      target="_blank"
      sx={(theme) => ({
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
        borderRadius: 0,
        ":nth-child(2)": {
          borderBottomLeftRadius: theme.radius.lg,
        },
        ":nth-child(4)": {
          borderBottomRightRadius: theme.radius.lg,
        },
      })}
    >
      {children}
    </Button>
  );
}

export default HeaderButton;
