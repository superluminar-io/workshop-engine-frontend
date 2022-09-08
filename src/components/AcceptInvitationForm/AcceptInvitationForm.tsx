import React, { FormEventHandler } from "react";
import { Control } from "react-hook-form";
import { ControlledTextField } from "../ControlledTextField/ControlledTextField";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";

import * as translations from "./AcceptInvitationForm.translations";

export interface AcceptInvitationFormData {
  emailAddress: string;
}

export interface AcceptInvitationFormProps {
  submitButtonLabel: string;
  loading: boolean;
  control: Control<AcceptInvitationFormData>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const AcceptInvitationForm: React.FunctionComponent<AcceptInvitationFormProps> =
  ({ submitButtonLabel, onSubmit, control, loading }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <Box component="form" onSubmit={onSubmit} textAlign="right">
        <ControlledTextField
          control={control}
          type="email"
          name="emailAddress"
          rules={{
            required: true,
          }}
          margin="normal"
          label={translations.inputEmailLabel}
          fullWidth
          required={true}
          placeholder={translations.inputEmailPlaceholder}
          disabled={loading}
        />
        <LoadingButton
          variant="contained"
          size="large"
          type="submit"
          fullWidth={fullScreen}
          loading={loading}
        >
          {submitButtonLabel}
        </LoadingButton>
      </Box>
    );
  };
