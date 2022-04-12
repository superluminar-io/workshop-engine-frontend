import React from "react";
import { useClerk } from "@clerk/nextjs";
import { Layout } from "../src/components/Layout/Layout";
import { WorkshopListContainer } from "../src/containers/WorkshopListContainer/WorkshopListContainer";
import { CreateWorkshopModalContainer } from "../src/containers/CreateWorkshopModalContainer/CreateWorkshopModalContainer";
import { WorkshopListDocument } from "../src/containers/WorkshopListContainer/WorkshopListContainer.generated";

const Home = () => {
  const { signOut } = useClerk();

  return (
    <Layout
      title="Workshops"
      titleRightSide={
        <CreateWorkshopModalContainer refetchQueries={[WorkshopListDocument]} />
      }
      signOut={() => signOut()}
    >
      <WorkshopListContainer />
    </Layout>
  );
};

export default Home;
