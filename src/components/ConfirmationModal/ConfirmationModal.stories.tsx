import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfirmationModal } from "./ConfirmationModal";

export default {
  title: "ConfirmationModal",
  component: ConfirmationModal,
  argTypes: {
    onConfirm: {
      action: "confirmed",
    },
    onCancel: {
      action: "cancelled",
    },
  },
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
);

export const Main = Template.bind({});
Main.storyName = "default";
Main.args = {
  open: true,
  title: "Are you sure you want to delete it?",
  cancelButtonLabel: "Cancel",
  confirmButtonLabel: "Delete",
};

export const Loading = Template.bind({});
Loading.storyName = "loading";
Loading.args = {
  open: true,
  loading: true,
  title: "Are you sure you want to delete it?",
  cancelButtonLabel: "Cancel",
  confirmButtonLabel: "Delete",
};
