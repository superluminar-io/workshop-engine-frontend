import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  AcceptInvitationFormData,
  AcceptInvitationForm,
} from "./AcceptInvitationForm";
import { useForm } from "react-hook-form";

export default {
  title: "AcceptInvitationForm",
  component: AcceptInvitationForm,
  argTypes: {
    onSubmit: {
      action: "submitted",
    },
    control: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof AcceptInvitationForm>;

const Template: ComponentStory<typeof AcceptInvitationForm> = (args) => {
  const methods = useForm<AcceptInvitationFormData>();

  return <AcceptInvitationForm control={methods.control} {...args} />;
};

export const Main = Template.bind({});
Main.storyName = "default";
Main.args = {
  submitButtonLabel: "Join",
};

export const Loading = Template.bind({});
Loading.storyName = "loading";
Loading.args = {
  loading: true,
  submitButtonLabel: "Join",
};

export const Success = Template.bind({});
Success.storyName = "success";
Success.args = {
  success: true,
  submitButtonLabel: "Join",
};
