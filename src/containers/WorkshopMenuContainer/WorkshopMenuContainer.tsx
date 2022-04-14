import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { WorkshopMenu } from "../../components/WorkshopMenu/WorkshopMenu";
import { UserRole } from "../../types";
import { UpdateWorkshopModalContainer } from "../UpdateWorkshopModalContainer/UpdateWorkshopModalContainer";
import { MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import * as translations from "./WorkshopMenuContainer.translations";

export interface WorkshopMenuContainerProps {
  workshopId: string;
  title: string;
  awsAccountId?: string;
  attendees: string[];
}

export const WorkshopMenuContainer: React.FunctionComponent<WorkshopMenuContainerProps> =
  ({ title, awsAccountId, attendees, workshopId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { role } = useContext(UserContext);

    if (role !== UserRole.Admin) {
      return;
    }

    return (
      <>
        <WorkshopMenu id={workshopId}>
          <MenuItem onClick={() => setIsModalOpen(true)}>
            <EditIcon />
            {translations.menuItemEdit}
          </MenuItem>
        </WorkshopMenu>
        {isModalOpen && (
          <UpdateWorkshopModalContainer
            onClose={() => setIsModalOpen(false)}
            workshopId={workshopId}
            title={title}
            awsAccountId={awsAccountId}
            attendees={attendees}
          />
        )}
      </>
    );
  };
