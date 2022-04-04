import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { Typography } from "@mui/material";

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
