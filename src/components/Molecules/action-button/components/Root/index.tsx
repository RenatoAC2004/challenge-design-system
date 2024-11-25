import React from "react";
import { ActionButtonProps } from "../../types";
import { Container } from "../../styles";

export function Root({ children, ...props }: ActionButtonProps) {

  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
