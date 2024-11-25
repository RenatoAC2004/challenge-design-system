import React from "react";
import { ActionButton } from "@/components/Molecules/action-button";
import { AlternativeButton } from "@/components/Molecules/alternative-button";
import { GroupButtonProps } from "../../types";
import { Container } from "../../styles";

export function Root({
  actionProps,
  alternativeProps,
  ...props
}: GroupButtonProps) {
  return (
    <Container {...props}>
      <ActionButton.Root {...actionProps} />
      <AlternativeButton.Root {...alternativeProps} />
    </Container>
  );
}
