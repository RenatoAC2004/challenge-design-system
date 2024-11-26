import React from "react";
import { Container } from "./label-base.styles";
import { LabelBaseProps } from "./types";

export function LabelBase({ children, ...props }: LabelBaseProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}
