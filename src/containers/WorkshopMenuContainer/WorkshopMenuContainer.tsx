import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { WorkshopMenu } from "../../components/WorkshopMenu/WorkshopMenu";
import { UserRole } from "../../types";
import { UpdateWorkshopModalContainer } from "../UpdateWorkshopModalContainer/UpdateWorkshopModalContainer";
import { MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as translations from "./WorkshopMenuContainer.translations";

export interface WorkshopMenuContainerProps {
  workshopId: string;
  title: string;
  description?: string;
  awsAccountId?: string;
  attendees: string[];
}

export const WorkshopMenuContainer: React.FunctionComponent<WorkshopMenuContainerProps> =
  ({ description, title, awsAccountId, attendees, workshopId }) => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const { role } = useContext(UserContext);

    if (role !== UserRole.Admin) {
      return;
    }

    return (
      <>
        <WorkshopMenu id={workshopId}>
          <MenuItem onClick={() => setIsUpdateModalOpen(true)}>
            <EditIcon />
            {translations.menuItemEdit}
          </MenuItem>
          <MenuItem onClick={() => setIsDeleteModalOpen(true)}>
            <DeleteIcon />
            {translations.menuItemDelete}
          </MenuItem>
        </WorkshopMenu>
        {isUpdateModalOpen && (
          <UpdateWorkshopModalContainer
            onClose={() => setIsUpdateModalOpen(false)}
            workshopId={workshopId}
            title={title}
            description={description}
            awsAccountId={awsAccountId}
            attendees={attendees}
          />
        )}
      </>
    );
  };
