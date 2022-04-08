import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WorkshopCard } from "./WorkshopCard";

export default {
  title: "WorkshopCard",
  component: WorkshopCard,
  parameters: {
    WorkshopCard: "fullscreen",
  },
  argTypes: {
    signOut: {
      action: "signed out",
    },
  },
} as ComponentMeta<typeof WorkshopCard>;

const TemplateSingle: ComponentStory<typeof WorkshopCard> = (args) => (
  <WorkshopCard {...args} />
);

const TemplateList: ComponentStory<typeof WorkshopCard> = (args) => (
  <>
    <WorkshopCard {...args} />
    <WorkshopCard {...args} />
    <WorkshopCard {...args} />
  </>
);

export const Single = TemplateSingle.bind({});
Single.storyName = "single item";
Single.args = {
  title: "Serverless Beginner Workshop",
  awsAccountId: "12345678",
};

export const List = TemplateList.bind({});
List.storyName = "list";
List.args = {
  title: "Serverless Beginner Workshop",
  awsAccountId: "12345678",
};
