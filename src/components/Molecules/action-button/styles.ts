import styled, { keyframes, css } from "styled-components";
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

export const WrapperIcons = styled.div<{ isloading?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 8px;

  svg {
    ${({ isloading }) =>
      isloading &&
      css`
        animation: ${spin} 1s linear infinite;
      `}
  }
`;
