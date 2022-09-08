import React from "react";
import { useUpdateWorkshopMutation } from "./UpdateWorkshopModalContainer.generated";
import {
  WorkshopFormData,
  WorkshopModal,
} from "../../components/WorkshopModal/WorkshopModal";
import { useForm } from "react-hook-form";
import * as translations from "./UpdateWorkshopModalContainer.translations";

export interface UpdateWorkshopModalContainerProps {
  onClose(): void;
  workshopId: string;
  title: string;
  description?: string;
  awsAccountId?: string;
  attendees: string[];
}

export const UpdateWorkshopModalContainer: React.FunctionComponent<UpdateWorkshopModalContainerProps> =
  ({ title, description, awsAccountId, attendees, workshopId, onClose }) => {
    const formMethods = useForm<WorkshopFormData>({
      defaultValues: {
        title,
        description,
        awsAccountId,
        attendees: attendees.join(","),
      },
    });
    const [updateWorkshop, mutationOptions] = useUpdateWorkshopMutation();

    const handleCancel = () => {
      onClose();
    };

    const handleSubmit = async (data: WorkshopFormData) => {
      const attendees = data.attendees || "";

      await updateWorkshop({
        variables: {
          workshopId,
          input: {
            title: data.title,
            description: data.description,
            awsAccountId: data.awsAccountId,
            attendees: attendees.split(","),
          },
        },
      });

      onClose();
    };

    return (
      <WorkshopModal
        open={true}
        loading={mutationOptions.loading}
        control={formMethods.control}
        title={translations.modalTitle}
        submitButtonLabel={translations.modalSubmitButtonLabel}
        onCancel={handleCancel}
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      />
    );
  };
