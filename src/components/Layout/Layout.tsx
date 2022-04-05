import React from "react";
import { Container, Typography } from "@mui/material";
import { Header, HeaderProps } from "../Header/Header";

export interface LayoutProps extends HeaderProps {
  title: string;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
  signOut,
}) => {
  return (
    <>
      <Header signOut={signOut} />
      <Container maxWidth="md">
        <Typography variant="h4" component="div" mb={6}>
          {title}
        </Typography>
        {children}
      </Container>
    </>
  );
};
