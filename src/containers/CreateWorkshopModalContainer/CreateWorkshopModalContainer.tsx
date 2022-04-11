import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCreateWorkshopMutation } from "./CreateWorkshopModalContainer.generated";
import { UserContext, UserRole } from "../../contexts/UserContext/UserContext";
import {
  WorkshopFormData,
  WorkshopModal,
} from "../../components/WorkshopModal/WorkshopModal";
import { useForm } from "react-hook-form";
import * as translations from "./CreateWorkshopModalContainer.translations";
import { RefetchQueryDescriptor } from "@apollo/client";

export interface CreateWorkshopModalContainerProps {
  refetchQueries?: RefetchQueryDescriptor[];
}

export const CreateWorkshopModalContainer: React.FunctionComponent<CreateWorkshopModalContainerProps> =
  ({ refetchQueries }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formMethods = useForm<WorkshopFormData>();
    const { role } = useContext(UserContext);
    const [createWorkshop, mutationOptions] = useCreateWorkshopMutation();

    const handleCancel = () => {
      setIsModalOpen(false);
      formMethods.reset();
    };

    const handleSubmit = async (data: WorkshopFormData) => {
      const attendees = data.attendees || "";

      await createWorkshop({
        variables: {
          input: {
            title: data.title,
            awsAccountId: data.awsAccountId,
            attendees: attendees.split(","),
          },
        },
        refetchQueries,
        awaitRefetchQueries: true,
      });

      setIsModalOpen(false);
      formMethods.reset();
      mutationOptions.reset();
    };

    if (role !== UserRole.Admin) {
      return;
    }

    return (
      <>
        <Button
          size="small"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setIsModalOpen(true)}
        >
          {translations.buttonCreateWorkshop}
        </Button>
        <WorkshopModal
          open={isModalOpen}
          loading={mutationOptions.loading}
          control={formMethods.control}
          title={translations.modalTitle}
          submitButtonLabel={translations.modalSubmitButtonLabel}
          onCancel={handleCancel}
          onSubmit={formMethods.handleSubmit(handleSubmit)}
        />
      </>
    );
  };
