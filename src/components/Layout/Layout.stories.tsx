import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    signOut: {
      action: "signed out",
    },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Main = Template.bind({});
Main.storyName = "main";
Main.args = {
  title: "Welcome 👋",
  children: (
    <Typography variant="body1">
      Adipisicing dolor esse veniam quis nostrud occaecat.
    </Typography>
  ),
};

export const WithTitleRightSide = Template.bind({});
WithTitleRightSide.storyName = "w/ element on the right side";
WithTitleRightSide.args = {
  title: "Welcome 👋",
  titleRightSide: (
    <Button
      size="small"
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
    >
      Create workshop
    </Button>
  ),
  children: (
    <Typography variant="body1">
      Adipisicing dolor esse veniam quis nostrud occaecat.
    </Typography>
  ),
};
