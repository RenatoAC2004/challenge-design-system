import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { PrimaryThemeProvider, primaryTheme } from "../src/themes/primary";
import { globalStyles } from "../src/styles/globalStyles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      primary: primaryTheme,
    },
    defaultTheme: "primary",
    Provider: PrimaryThemeProvider,
    GlobalStyles: globalStyles,
  }),
];

export default preview;
