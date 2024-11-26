import React from "react";
import { Container } from "../../styles";
import { LabelBaseProps } from "@/components/Atoms/label-base/types";

export function Root({ children, backgroundColor, textColor, ...props }: LabelBaseProps) {

  return (
    <Container backgroundColor={backgroundColor} textColor={textColor} {...props}>
      {children}
    </Container>
  );
}
