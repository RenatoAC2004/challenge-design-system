import styled from "styled-components";
import { LabelBaseProps } from "./types";

export const Container = styled.span<LabelBaseProps>`
  background-color: ${(props) =>
    props.backgroundColor || "rgba(68, 61, 246, 0.1)"};
  color: ${(props) => props.textColor || "#443DF6"};
  border-radius: 5px;
  padding: 4px 9px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  max-width: 64px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
