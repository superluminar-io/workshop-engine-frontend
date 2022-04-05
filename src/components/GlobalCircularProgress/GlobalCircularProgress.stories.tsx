import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GlobalCircularProgress } from "./GlobalCircularProgress";

export default {
  title: "GlobalCircularProgress",
  component: GlobalCircularProgress,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof GlobalCircularProgress>;

const Template: ComponentStory<typeof GlobalCircularProgress> = (args) => (
  <GlobalCircularProgress {...args} />
);

export const Main = Template.bind({});
Main.storyName = "main";
