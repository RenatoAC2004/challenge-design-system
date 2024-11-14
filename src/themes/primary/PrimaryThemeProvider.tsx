import { ThemeProvider } from "styled-components";
import { primaryTheme } from "./theme";

export function PrimaryThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={primaryTheme}>{children}</ThemeProvider>;
}
