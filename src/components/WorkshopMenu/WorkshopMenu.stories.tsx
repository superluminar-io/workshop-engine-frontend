import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WorkshopMenu } from "./WorkshopMenu";
import { Box, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default {
  title: "WorkshopMenu",
  component: WorkshopMenu,
  argTypes: {
    onEdit: {
      action: "edited",
    },
  },
} as ComponentMeta<typeof WorkshopMenu>;

const Template: ComponentStory<typeof WorkshopMenu> = (args) => (
  <Box
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <WorkshopMenu {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.storyName = "main";
Main.args = {
  children: (
    <MenuItem>
      <EditIcon />
      Edit
    </MenuItem>
  ),
};
