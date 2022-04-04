import React from "react";
import { Button, Box, AppBar, Toolbar } from "@mui/material";

export interface HeaderProps {
  signOut(): void;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ signOut }) => (
  <AppBar position="static" sx={{ mb: 8 }}>
    <Toolbar>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box
          component="img"
          sx={{
            width: 120,
          }}
          src="superluminar_logo.svg"
          role="presentation"
          alt="superluminar workshops"
        />
      </Box>
      <Button onClick={() => signOut()} color="inherit">
        Logout
      </Button>
    </Toolbar>
  </AppBar>
);
