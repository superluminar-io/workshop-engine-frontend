import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WorkshopFormData, WorkshopModal } from "./WorkshopModal";
import { useForm } from "react-hook-form";

export default {
  title: "WorkshopModal",
  component: WorkshopModal,
  argTypes: {
    onSubmit: {
      action: "submitted",
    },
    onCancel: {
      action: "cancelled",
    },
    control: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof WorkshopModal>;

const Template: ComponentStory<typeof WorkshopModal> = (args) => {
  const methods = useForm<WorkshopFormData>();

  return <WorkshopModal control={methods.control} {...args} />;
};

export const Main = Template.bind({});
Main.storyName = "default";
Main.args = {
  open: true,
  title: "Create new workshop",
  submitButtonLabel: "Create",
};

export const Loading = Template.bind({});
Loading.storyName = "loading";
Loading.args = {
  open: true,
  loading: true,
  title: "Create new workshop",
  submitButtonLabel: "Create",
};
