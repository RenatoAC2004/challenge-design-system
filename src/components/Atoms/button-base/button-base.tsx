import React from "react";
import { Container } from "./button-base.styles";
import { ButtonBaseProps } from "./types";

export function ButtonBase({ children, size, ...props }: ButtonBaseProps) {
  return (
    <Container size={size} {...props}>
      {children}
    </Container>
  );
}
