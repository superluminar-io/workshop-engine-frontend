import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  CardActions,
  Typography,
} from "@mui/material";
import { useClerk } from "@clerk/nextjs";
import { Header } from "../components/Header/Header";

const Home = () => {
  const { signOut } = useClerk();

  return (
    <>
      <Header signOut={() => signOut()} />
      <Container maxWidth="md">
        <Typography variant="h4" component="div" mb={6}>
          Welcome 👋
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" component="span">
              Serverless Beginner Workshop
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="/api/console" target="_blank">
              Open AWS Management Console
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Home;
