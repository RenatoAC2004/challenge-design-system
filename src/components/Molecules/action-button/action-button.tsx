import React from "react";
import { ActionButtonProps } from "./types";
import { Container, LoadingSpinner } from "./action-button.styles";
import { ButtonBase } from "@/components/Atoms/button-base";

import icon from '@/app/icons/Tick.svg'
import Image from "next/image";
// export const ActionButton: React.FC<ActionButtonProps> = ({ label }) => {
// export const ActionButton = ({ label }:ActionButtonProps) => {
// usar ...props??
// devo usar <ButtonBase/> direto ao invés do <Container/> ?

// export const ActionButton: React.FC<ActionButtonProps> = ({ label, loading, disabled, onClick }) => {
//   return <Container>{loading ? "Saving" : label}</Container>;
// };

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  loading,
  disabled,
  saved,
  onClick,
}) => {
  return (
    <Container
      disabled={disabled}
      onClick={!loading && !disabled ? onClick : undefined}
    >
      {loading ? (
        <>
          <LoadingSpinner /> Saving
        </>
      ) : saved ? (
        <><Image src={icon} alt="Saved Icon"/> Saved</>
      ) : (
        label
      )}
    </Container>
  );
};
