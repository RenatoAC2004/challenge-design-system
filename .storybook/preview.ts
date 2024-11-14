import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { primaryTheme } from "../src/themes/primary";
import { globalStyles } from "../src/styles/globalStyles";
import PrimaryThemeProvider from "../src/themes/primary/PrimaryThemeProvider";

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
    //GlobalStyles: globalStyles,
  }),
];

export default preview;
