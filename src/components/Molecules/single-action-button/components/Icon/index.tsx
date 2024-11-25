import React from "react";
import { WrapperIcons } from "../../styles";
import { IconType } from "./types";

export function Icon({ icon, size }: IconType) {
  return <WrapperIcons size={size}>{icon}</WrapperIcons>;
}
