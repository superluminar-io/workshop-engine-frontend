import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Header, HeaderProps } from "../Header/Header";

export interface LayoutProps extends HeaderProps {
  title: string;
  titleRightSide?: React.ReactElement;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  titleRightSide,
  title,
  signOut,
}) => {
  return (
    <>
      <Header signOut={signOut} />
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={6}
        >
          <Typography variant="h4" component="span">
            {title}
          </Typography>
          {titleRightSide && (
            <Box ml={2} flexGrow={0}>
              {titleRightSide}
            </Box>
          )}
        </Box>
        {children}
      </Container>
    </>
  );
};
