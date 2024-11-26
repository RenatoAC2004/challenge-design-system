import React from "react";
import { WrapperIcons } from "../../styles";
import { IconType } from "./types";

export function Icon({ icon }: IconType) {
  return <WrapperIcons >{icon}</WrapperIcons>;
}
