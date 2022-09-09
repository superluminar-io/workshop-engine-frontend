import React from "react";
import { ConfirmationModal } from "../../components/ConfirmationModal/ConfirmationModal";
import { useDeleteWorkshopMutation } from "./DeleteWorkshopModalContainer.generated";
import { WorkshopListDocument } from "../WorkshopListContainer/WorkshopListContainer.generated";
import * as translations from "./DeleteWorkshopModalContainer.translations";

export interface DeleteWorkshopModalContainerProps {
  onClose(): void;
  workshopId: string;
}

export const DeleteWorkshopModalContainer: React.FunctionComponent<DeleteWorkshopModalContainerProps> =
  ({ workshopId, onClose }) => {
    const [deleteWorkshopMutation, mutationOptions] =
      useDeleteWorkshopMutation();

    const handleCancel = () => {
      onClose();
    };

    const handleDeletion = async () => {
      await deleteWorkshopMutation({
        variables: {
          workshopId,
        },
        refetchQueries: [WorkshopListDocument],
        awaitRefetchQueries: true,
      });

      onClose();
    };

    return (
      <ConfirmationModal
        open={true}
        loading={mutationOptions.loading}
        title={translations.title}
        confirmButtonLabel={translations.confirmButtonLabel}
        cancelButtonLabel={translations.cancelButtonLabel}
        onCancel={handleCancel}
        onConfirm={handleDeletion}
      />
    );
  };
