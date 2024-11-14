import React from "react";
import { ActionButtonProps } from "../../types";
import { Container } from "../../styles";

export function Root({ label, props }: ActionButtonProps) {
  return <Container {...props}>{label}</Container>;
}
