import React from "react";
import { useClerk } from "@clerk/nextjs";
import { Layout } from "../src/components/Layout/Layout";
import { WorkshopCard } from "../src/components/WorkshopCard/WorkshopCard";

const Home = () => {
  const { signOut } = useClerk();

  return (
    <Layout title="Welcome 👋" signOut={() => signOut()}>
      <WorkshopCard
        title="Serverless Beginner Workshop"
        awsAccountId="770747224463"
      />
    </Layout>
  );
};

export default Home;
