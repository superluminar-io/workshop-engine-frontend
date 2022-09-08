import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Skeleton,
  CardHeader,
  Link,
} from "@mui/material";
import MuiMarkdown from "mui-markdown";
import * as translations from "./WorkshopCard.translations";

export interface WorkshopCardDataProps {
  variant?: "data";
  title: string;
  description?: string;
  awsAccountId?: string;
  headerRightSide?: React.ReactElement;
}

export interface WorkshopCardLoadingProps {
  variant: "loading";
}

export type WorkshopCardProps =
  | WorkshopCardDataProps
  | WorkshopCardLoadingProps;

const MarkdownParagraph = (props) => (
  <Typography
    {...props}
    variant="body1"
    sx={{ mb: 2, "&:last-child": { mb: 0 } }}
  />
);

const MarkdownLink = (props) => (
  <Link {...props} target="_blank" rel="noreferrer noopener" />
);

export const WorkshopCard: React.FunctionComponent<WorkshopCardProps> = (
  props
) => {
  if (props.variant === "loading") {
    return (
      <Card sx={{ mb: 4 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="span">
            <Skeleton variant="text" width={100} />
          </Typography>
        </CardContent>
        <CardActions>
          <Skeleton variant="rectangular">
            <Button href="">{translations.buttonLabel}</Button>
          </Skeleton>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title={props.title} action={props.headerRightSide} />
      {props.description && (
        <CardContent>
          <MuiMarkdown
            overrides={{
              p: {
                component: MarkdownParagraph,
              },
              a: {
                component: MarkdownLink,
              },
            }}
          >
            {props.description}
          </MuiMarkdown>
        </CardContent>
      )}
      <CardActions>
        {props.awsAccountId && (
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
