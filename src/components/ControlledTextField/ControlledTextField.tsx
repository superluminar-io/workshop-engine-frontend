import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";

export type ControlledTextFieldProps<FieldValues> = Omit<
  ControllerProps<FieldValues>,
  "render"
> &
  TextFieldProps;

export function ControlledTextField<FieldValues>({
  name,
  rules,
  control,
  shouldUnregister,
  defaultValue,
  ...rest
}: ControlledTextFieldProps<FieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
      }) => (
        <TextField
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          error={invalid}
          helperText={error ? error : rest.helperText}
          {...rest}
        />
      )}
    />
  );
}
