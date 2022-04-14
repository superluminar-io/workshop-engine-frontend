import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { WorkshopMenu } from "../../components/WorkshopMenu/WorkshopMenu";
import { UserRole } from "../../types";
import { UpdateWorkshopModalContainer } from "../UpdateWorkshopModalContainer/UpdateWorkshopModalContainer";
import { MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { RefetchQueryDescriptor } from "@apollo/client";
import * as translations from "./WorkshopMenuContainer.translations";

export interface WorkshopMenuContainerProps {
  workshopId: string;
  title: string;
  awsAccountId?: string;
  attendees: string[];
  refetchQueries?: RefetchQueryDescriptor[];
}

export const WorkshopMenuContainer: React.FunctionComponent<WorkshopMenuContainerProps> =
  ({ title, awsAccountId, attendees, workshopId, refetchQueries }) => {
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
        <UpdateWorkshopModalContainer
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          workshopId={workshopId}
          title={title}
          awsAccountId={awsAccountId}
          attendees={attendees}
          refetchQueries={refetchQueries}
        />
      </>
    );
  };
