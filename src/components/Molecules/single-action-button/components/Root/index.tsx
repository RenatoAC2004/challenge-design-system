import React from "react";
import { Container } from "../../styles";
import { SingleActionButtonProps } from "../../types";

export function Root({ size, children, ...props }: SingleActionButtonProps) {
  return (
    <Container {...props} size={size}>
      {children}
    </Container>
  );
}
