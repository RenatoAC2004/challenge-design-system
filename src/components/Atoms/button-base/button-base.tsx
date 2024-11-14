import React from "react";
import { Container } from "./button-base.styles";
import { ButtonBaseProps } from "./types";

export function ButtonBase({ children, props }: ButtonBaseProps) {
  return <Container {...props}>{children}</Container>;
}
