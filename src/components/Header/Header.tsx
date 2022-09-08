import React from "react";
import { Button, Box, AppBar, Toolbar } from "@mui/material";
import Image from "next/image";

export interface HeaderProps {
  signOut?(): void;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ signOut }) => (
  <AppBar position="static" sx={{ mb: 8 }}>
    <Toolbar>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Image
          src="/superluminar_logo.svg"
          role="presentation"
          alt="superluminar workshops"
          width={120}
          height={28}
        />
      </Box>
      {signOut && (
        <Button onClick={() => signOut()} color="inherit">
          Logout
        </Button>
      )}
    </Toolbar>
  </AppBar>
);
