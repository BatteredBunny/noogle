"use client";
import { CssBaseline } from "@mui/material";
import { cssThemeOptions } from "@/styles/theme";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

const theme = createTheme(cssThemeOptions);

export const ClientSideLayoutContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <InitColorSchemeScript />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  );
};
