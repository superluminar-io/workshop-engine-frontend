import React from "react";
import { ConfirmationModal } from "../../components/ConfirmationModal/ConfirmationModal";
import * as translations from "./DeleteWorkshopModalContainer.translations";

export interface DeleteWorkshopModalContainerProps {
  onClose(): void;
  workshopId: string;
}

export const DeleteWorkshopModalContainer: React.FunctionComponent<DeleteWorkshopModalContainerProps> =
  ({ workshopId, onClose }) => {
    const handleCancel = () => {
      onClose();
    };

    const handleDeletion = async () => {
      onClose();
    };

    return (
      <ConfirmationModal
        open={true}
        loading={false}
        title={translations.title}
        confirmButtonLabel={translations.confirmButtonLabel}
        cancelButtonLabel={translations.cancelButtonLabel}
        onCancel={handleCancel}
        onConfirm={handleDeletion}
      />
    );
  };
