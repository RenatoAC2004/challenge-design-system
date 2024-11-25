import { AlternativeButtonProps } from "../../types";
import { Container } from "../../styles";

export function Root({ children, ...props }: AlternativeButtonProps) {
  return <Container {...props}>{children}</Container>;
}
