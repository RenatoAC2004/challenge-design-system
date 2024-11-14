import { Poppins, Source_Code_Pro } from "next/font/google";
import { PrimaryThemeType } from "./types";

const poppins = Poppins({ weight: ["600", "700"] });
const sourceCodePro = Source_Code_Pro({ weight: ["600", "700"] });

export const primaryTheme: PrimaryThemeType = {
  colors: {
    primary: {
      blue: "#443DF6",
      gray: "#1B2124",
      black: "#000000",
    },
    gray: {
      900: "#8D9091",
      700: "#CCCCCC",
      500: "#EFEFEF",
      300: "#FBFBFB",
    },
    toneColours: {
      navy: "#191489",
      red: "#C5292A",
      sunny: "#FFD965",
      marina: "#A6D4FF",
      green: "#22B02E",
    },
  },
  fonts: poppins.style.fontFamily,
  fontFamilyClassName: {
    poppins: poppins.className,
    sourceCodePro: sourceCodePro.className,
  },
  fonteSizes: {
    headings: {
      h1Plus: "4rem", // 64px
      h1: "2.5rem", // 40px
      h2: "2rem", // 32px
      h3: "1.5rem", // 24px
      h4: "1rem", // 16px
    },
    paragraphs: {
      base: "1rem", // 16px
      xxs: "0.75rem", // 12px
      xs: "0.875rem", // 14px
    },
    code: "0.813rem", // 13px
  },
  spacings: {
    "1": "8px",
    "2": "12px",
    "3": "16px",
    "4": "24px",
    "5": "32px",
    "6": "48px",
  },
  animations: {
    spin: "spin 1s linear infinite",
  },
  keyframes: {
    spin: `from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
    }`,
  },
  screens: {
    sm: "640px", // => @media (min-width: 640px) { ... }
    md: "768px", // => @media (min-width: 768px) { ... }
    lg: "1024px", // => @media (min-width: 1024px) { ... }
    xl: "1280px", // => @media (min-width: 1280px) { ... }
    "2xl": "1536px", // => @media (min-width: 1536px) { ... }
  },
  shadows: {
    sm: "drop-shadow(0 0 5px rgba(0,0,0,0.5)) drop-shadow(0 25px 35px rgba(0,0,0,0.3))",
    md: "drop-shadow(0 2 5px rgba(0,0,0,0.5))",
    lg: "drop-shadow(0 2 5px rgba(0,0,0,0.29))",
  },
};
