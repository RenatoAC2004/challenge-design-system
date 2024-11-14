import { PrimaryThemeType } from "@/themes/primary/types";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryTheme: PrimaryThemeType;
  }
}
