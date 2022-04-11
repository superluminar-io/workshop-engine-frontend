import React from "react";
import {
  render as renderTestingLibrary,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../config/theme";

export const noop = () => null;

export const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult => {
  return renderTestingLibrary(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
    options
  );
};
