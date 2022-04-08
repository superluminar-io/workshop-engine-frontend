import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Skeleton,
} from "@mui/material";
import * as translations from "./WorkshopCard.translations";

export interface WorkshopCardDataProps {
  variant?: "data";
  title: string;
  awsAccountId: string;
}

export interface WorkshopCardLoadingProps {
  variant: "loading";
}

export type WorkshopCardProps =
  | WorkshopCardDataProps
  | WorkshopCardLoadingProps;

export const WorkshopCard: React.FunctionComponent<WorkshopCardProps> = (
  props
) => {
  const isLoading = props.variant === "loading";

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="span">
          {isLoading ? <Skeleton variant="text" /> : props.title}
        </Typography>
      </CardContent>
      <CardActions>
        {isLoading ? (
          <Skeleton variant="rectangular">
            <Button href="">{translations.buttonLabel}</Button>
          </Skeleton>
        ) : (
          <Button
            href={`/api/console?awsAccountId=${props.awsAccountId}`}
            target="_blank"
          >
            {translations.buttonLabel}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
