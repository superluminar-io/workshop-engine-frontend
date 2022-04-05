import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useClerk } from "@clerk/nextjs";
import { Layout } from "../src/components/Layout/Layout";

const Home = () => {
  const { signOut } = useClerk();

  return (
    <Layout title="Welcome 👋" signOut={() => signOut()}>
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
    </Layout>
  );
};

export default Home;
