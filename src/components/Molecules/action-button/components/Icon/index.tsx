import React from "react";
import { WrapperIcons } from "../../styles";
import { IconType } from "./types";

export function Icon({ icon, isloading }: IconType) {
  return <WrapperIcons isloading={isloading}>{icon}</WrapperIcons>;
}
