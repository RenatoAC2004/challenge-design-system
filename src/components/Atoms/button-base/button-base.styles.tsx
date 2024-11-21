import styled from "styled-components";
import { ButtonBaseProps } from "./types";

export const Container = styled.button<ButtonBaseProps>`
  background-color: #443df6;
  height: ${(props) => (props.size === 'small' ? '40px' : '56px')};
  width: ${(props) => (props.size === 'small' ? '96px' : '120px')};
  min-width: 80px;
  border: 0;
  font-weight: 600;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#443df6" : "#605af7")};
  }

  &:active,
  &:focus {
    background-color: ${(props) => (props.disabled ? "#443df6" : "#3a34d1")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
