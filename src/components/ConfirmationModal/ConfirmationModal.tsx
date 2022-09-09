import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export interface ConfirmationModalProps {
  title: string;
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  open: boolean;
  loading: boolean;
  onCancel(): void;
  onConfirm(): void;
}

export const ConfirmationModal: React.FunctionComponent<ConfirmationModalProps> =
  ({
    title,
    cancelButtonLabel,
    confirmButtonLabel,
    open,
    loading,
    onCancel,
    onConfirm,
  }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <Dialog
        open={open}
        onClose={loading ? undefined : onCancel}
        fullWidth
        maxWidth="sm"
        fullScreen={fullScreen}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogActions sx={{ pr: 3, pl: 3, pb: 2 }}>
          <Button
            variant="outlined"
            onClick={onCancel}
            fullWidth={fullScreen}
            disabled={loading}
          >
            {cancelButtonLabel}
          </Button>
          <LoadingButton
            onClick={onConfirm}
            variant="contained"
            type="submit"
            fullWidth={fullScreen}
            loading={loading}
          >
            {confirmButtonLabel}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    );
  };
