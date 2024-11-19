import { AlternativeButtonProps } from "../../types";
import { Container } from "../../styles";

export function Root({ label, ...props }: AlternativeButtonProps) {
  return <Container {...props}>{label}</Container>;
}
