import React from "react";
import { Typography } from "@mui/material";
import { WorkshopCard } from "../../components/WorkshopCard/WorkshopCard";
import { useWorkshopListQuery } from "./WorkshopListContainer.generated";
import { WorkshopMenuContainer } from "../WorkshopMenuContainer/WorkshopMenuContainer";

export const WorkshopListContainer: React.FunctionComponent = () => {
  const { loading, error, data } = useWorkshopListQuery();

  if (loading) {
    return <WorkshopCard variant="loading" />;
  }

  if (error || !data) {
    console.log(error);
    return <Typography variant="body1">Something went wrong!</Typography>;
  }

  return (
    <>
      {data.workshops.items.map((workshop) => (
        <WorkshopCard
          key={workshop.id}
          title={workshop.title}
          description={workshop.description}
          awsAccountId={workshop.awsAccountId}
          headerRightSide={
            <WorkshopMenuContainer
              workshopId={workshop.id}
              title={workshop.title}
              description={workshop.description}
              awsAccountId={workshop.awsAccountId}
              attendees={workshop.attendees}
            />
          }
        />
      ))}
    </>
  );
};
