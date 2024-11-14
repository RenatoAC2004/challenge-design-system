import { z } from "zod";

export const primaryThemeSchema = z.object({
  colors: z.object({
    primary: z.object({
      blue: z.string(),
      gray: z.string(),
      black: z.string(),
    }),
    gray: z.object({
      900: z.string(),
      700: z.string(),
      500: z.string(),
      300: z.string(),
    }),
    toneColours: z.object({
      navy: z.string(),
      red: z.string(),
      sunny: z.string(),
      marina: z.string(),
      green: z.string(),
    }),
  }),
  fonts: z.string(),
  fontFamilyClassName: z.object({
    poppins: z.string(),
    sourceCodePro: z.string(),
  }),
  fonteSizes: z.object({
    headings: z.object({
      h1Plus: z.string(),
      h1: z.string(),
      h2: z.string(),
      h3: z.string(),
      h4: z.string(),
    }),
    paragraphs: z.object({
      base: z.string(),
      xxs: z.string(),
      xs: z.string(),
    }),
    code: z.string(),
  }),
  spacings: z.object({
    "1": z.string(),
    "2": z.string(),
    "3": z.string(),
    "4": z.string(),
    "5": z.string(),
    "6": z.string(),
  }),
  animations: z.object({
    spin: z.string(),
  }),
  keyframes: z.object({
    spin: z.string(),
  }),
  screens: z.object({
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
    xl: z.string(),
    "2xl": z.string(),
  }),
  shadows: z.object({
    sm: z.string(),
    md: z.string(),
    lg: z.string(),
  }),
});

export type PrimaryThemeType = z.infer<typeof primaryThemeSchema>;
