import styled from "styled-components";
import { ButtonBaseProps } from "./types";

export const Container = styled.button<ButtonBaseProps>`
  background-color: #443df6;
  height: 56px;
  width: 120px;
  border: 0;
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
