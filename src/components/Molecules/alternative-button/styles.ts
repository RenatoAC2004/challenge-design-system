import { ButtonBase } from "@/components/Atoms/button-base";
import styled from "styled-components";

export const Container = styled(ButtonBase)`
  background-color: rgba(68, 61, 246, 0.1);
  color: #443df6;
  transition: all 300ms ease;

  &:hover {
    background-color: rgba(68, 61, 246, 0.2);
    ${(props) => props.disabled && `background-color: rgba(68, 61, 246, 0.1);`}
  }

  &:active,
  &:focus {
    background-color: rgba(68, 61, 246, 0.25);
    ${(props) => props.disabled && `background-color: rgba(68, 61, 246, 0.1);`}
  }
`;
