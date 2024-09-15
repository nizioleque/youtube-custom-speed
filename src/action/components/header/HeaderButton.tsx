import { Box, Button } from "@mui/joy";
import { ReactNode } from "react";

interface HeaderButtonProps {
  href: string;
  children: ReactNode;
  icon: ReactNode;
}

function HeaderButton({ href, children, icon }: HeaderButtonProps) {
  return (
    <Button
      className="header-background"
      component="a"
      href={href}
      variant="soft"
      target="_blank"
      size="sm"
      startDecorator={
        <Box
          sx={{
            "--shadow-color":
              "color-mix(in srgb, var(--joy-palette-primary-800), transparent 70%)",
            filter: "drop-shadow(0 0 1px var(--shadow-color))",
          }}
        >
          {icon}
        </Box>
      }
    >
      {children}
    </Button>
  );
}

export default HeaderButton;
