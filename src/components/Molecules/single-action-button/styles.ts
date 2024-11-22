import styled from "styled-components";
import { SingleActionButtonProps } from "./types";
import { ButtonBase } from "@/components/Atoms/button-base";

export const Container = styled(ButtonBase)<SingleActionButtonProps>`
  height: ${(props) => (props.size === "small" ? "32px" : "48px")};
  width: ${(props) => (props.size === "small" ? "32px" : "48px")};
  min-width: 0px;
  border-radius: 100%;
  font-weight: 400;
`;

export const WrapperIcons = styled.div<{ size?: "small" | "default" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${(props) => (props.size === "small" ? "16px" : "24px")};
    height: ${(props) => (props.size === "small" ? "16px" : "24px")};
  }
`;
