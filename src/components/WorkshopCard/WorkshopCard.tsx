import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

export interface WorkshopCardProps {
  title: string;
  awsAccountId: string;
}

export const WorkshopCard: React.FunctionComponent<WorkshopCardProps> = ({
  title,
  awsAccountId,
}) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" component="span">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={`/api/console?awsAccountId=${awsAccountId}`}
          target="_blank"
        >
          Open AWS Management Console
        </Button>
      </CardActions>
    </Card>
  );
};
