import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WorkshopCard } from "./WorkshopCard";
import { WorkshopMenu } from "../WorkshopMenu/WorkshopMenu";
import EditIcon from "@mui/icons-material/Edit";
import { MenuItem } from "@mui/material";

export default {
  title: "WorkshopCard",
  component: WorkshopCard,
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

export const WithMenu = TemplateSingle.bind({});
WithMenu.storyName = "w/ menu";
WithMenu.args = {
  title: "Serverless Beginner Workshop",
  awsAccountId: "12345678",
  headerRightSide: (
    <WorkshopMenu id="abc">
      <MenuItem>
        <EditIcon />
        Edit
      </MenuItem>
    </WorkshopMenu>
  ),
};

export const WithoutAwsAccountId = TemplateSingle.bind({});
WithoutAwsAccountId.storyName = "single item w/o AWS Account ID";
WithoutAwsAccountId.args = {
  title: "Serverless Beginner Workshop",
};

export const Loading = TemplateSingle.bind({});
Loading.storyName = "loading";
Loading.args = {
  variant: "loading",
};

export const List = TemplateList.bind({});
List.storyName = "list";
List.args = {
  title: "Serverless Beginner Workshop",
  awsAccountId: "12345678",
};
