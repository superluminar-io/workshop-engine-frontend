import React from "react";
import { useClerk } from "@clerk/nextjs";
import { Layout } from "../src/components/Layout/Layout";
import { WorkshopListContainer } from "../src/containers/WorkshopListContainer/WorkshopListContainer";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  const { signOut } = useClerk();

  return (
    <Layout
      title="Welcome 👋"
      titleRightSide={
        <Button
          size="small"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Create workshop
        </Button>
      }
      signOut={() => signOut()}
    >
      <WorkshopListContainer />
    </Layout>
  );
};

export default Home;
