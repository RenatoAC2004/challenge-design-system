import { ThemeProvider } from "styled-components";
import { primaryTheme } from "./theme";
import React from "react";

function PrimaryThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={primaryTheme}>{children}</ThemeProvider>;
}

export default PrimaryThemeProvider;
