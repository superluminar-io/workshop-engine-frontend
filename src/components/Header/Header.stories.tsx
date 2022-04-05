import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    signOut: {
      action: "signed out",
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Main = Template.bind({});
Main.storyName = "main";
