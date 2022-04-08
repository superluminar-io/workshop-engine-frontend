import React from "react";
import { useClerk } from "@clerk/nextjs";
import { Layout } from "../src/components/Layout/Layout";
import { WorkshopListContainer } from "../src/containers/WorkshopListContainer/WorkshopListContainer";

const Home = () => {
  const { signOut } = useClerk();

  return (
    <Layout title="Welcome 👋" signOut={() => signOut()}>
      <WorkshopListContainer />
    </Layout>
  );
};

export default Home;
