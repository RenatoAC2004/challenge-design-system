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

export const Container = styled(ButtonBase)`
  /* background-color: #443df6;
  
  &:hover {
    background-color: #605af7;
  }

  &:active {
    background-color: #3a34d1;
  } */
`;

export const LoadingSpinner = styled.div`
  border: 2px solid #fff;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
  margin-right: 8px;
`;