import React from "react";
import { Container } from "../../styles";
import { Icon } from "../Icon";
import { LucidePlus } from "lucide-react";
import { SingleActionButtonProps } from "../../types";

export function Root({ size, ...props }: SingleActionButtonProps) {
  return (
    <Container {...props} size={size}>
      <Icon icon={<LucidePlus />} size={size} />
    </Container>
  );
}
