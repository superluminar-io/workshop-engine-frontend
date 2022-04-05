import React from "react";
import { Box, CircularProgress, Portal } from "@mui/material";

export const GlobalCircularProgress: React.FunctionComponent = () => {
  return (
    <Portal>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </Portal>
  );
};
