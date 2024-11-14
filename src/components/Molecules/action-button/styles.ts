import styled, { keyframes } from "styled-components";
import { ButtonBase } from "@/components/Atoms/button-base";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled(ButtonBase)``;

export const WrapperIcons = styled.div`
  svg {
    animation: ${spin} 1s linear infinite;
  }
`;
