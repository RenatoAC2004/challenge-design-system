import React from "react";
import { Container } from "./button-base.styles";
import { BaseButtonProps } from "./types";

export const ButtonBase: React.FC<BaseButtonProps> = ({children, disabled}) => {
  return <Container disabled={disabled}>{children}</Container>;
}
