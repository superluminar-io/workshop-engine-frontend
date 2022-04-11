import React, { FormEvent, FormEventHandler } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Control } from "react-hook-form";
import { ControlledTextField } from "../ControlledTextField/ControlledTextField";
import * as translations from "./WorkshopModal.translations";

export interface WorkshopFormData {
  title: string;
  awsAccountId?: string;
  // comma separated
  attendees?: string;
}

export interface WorkshopModalProps {
  title: string;
  submitButtonLabel: string;
  open: boolean;
  loading: boolean;
  control: Control<WorkshopFormData>;
  onCancel(): void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const WorkshopModal: React.FunctionComponent<WorkshopModalProps> = ({
  title,
  submitButtonLabel,
  open,
  loading,
  onCancel,
  control,
  onSubmit,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onCancel}
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <ControlledTextField
            control={control}
            type="text"
            name="title"
            rules={{
              required: true,
            }}
            autoFocus
            margin="dense"
            label={translations.inputTitleLabel}
            fullWidth
            required={true}
            placeholder={translations.inputTitlePlaceholder}
            disabled={loading}
          />
          <ControlledTextField
            control={control}
            type="text"
            margin="dense"
            name="awsAccountId"
            label={translations.inputAwsAccountIdLabel}
            placeholder={translations.inputAwsAccountIdPlaceholder}
            inputProps={{ pattern: "[0-9]{12}" }}
            fullWidth
            disabled={loading}
          />
          <ControlledTextField
            control={control}
            margin="dense"
            name="attendees"
            label={translations.inputAttendeesLabel}
            type="email"
            fullWidth
            placeholder={translations.inputAttendeesPlaceholder}
            inputProps={{ multiple: true }}
            disabled={loading}
          />
        </DialogContent>
        <DialogActions sx={{ pr: 3, pl: 3, pb: 2 }}>
          <Button
            variant="outlined"
            onClick={onCancel}
            fullWidth={fullScreen}
            disabled={loading}
          >
            {translations.cancelButtonLabel}
          </Button>
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth={fullScreen}
            loading={loading}
          >
            {submitButtonLabel}
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};
