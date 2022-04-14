import React from "react";
import { useUpdateWorkshopMutation } from "./UpdateWorkshopModalContainer.generated";
import {
  WorkshopFormData,
  WorkshopModal,
} from "../../components/WorkshopModal/WorkshopModal";
import { useForm } from "react-hook-form";
import * as translations from "./UpdateWorkshopModalContainer.translations";
import { RefetchQueryDescriptor } from "@apollo/client";

export interface UpdateWorkshopModalContainerProps {
  open: boolean;
  onClose(): void;
  workshopId: string;
  title: string;
  awsAccountId?: string;
  attendees: string[];
  refetchQueries?: RefetchQueryDescriptor[];
}

export const UpdateWorkshopModalContainer: React.FunctionComponent<UpdateWorkshopModalContainerProps> =
  ({
    title,
    awsAccountId,
    attendees,
    workshopId,
    refetchQueries,
    open,
    onClose,
  }) => {
    const formMethods = useForm<WorkshopFormData>({
      defaultValues: {
        title,
        awsAccountId,
        attendees: attendees.join(","),
      },
    });
    const [updateWorkshop, mutationOptions] = useUpdateWorkshopMutation();

    const handleCancel = () => {
      onClose();
      formMethods.reset();
    };

    const handleSubmit = async (data: WorkshopFormData) => {
      const attendees = data.attendees || "";

      await updateWorkshop({
        variables: {
          workshopId,
          input: {
            title: data.title,
            awsAccountId: data.awsAccountId,
            attendees: attendees.split(","),
          },
        },
        refetchQueries,
        awaitRefetchQueries: true,
      });

      onClose();
      formMethods.reset();
      mutationOptions.reset();
    };

    return (
      <WorkshopModal
        open={open}
        loading={mutationOptions.loading}
        control={formMethods.control}
        title={translations.modalTitle}
        submitButtonLabel={translations.modalSubmitButtonLabel}
        onCancel={handleCancel}
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      />
    );
  };
