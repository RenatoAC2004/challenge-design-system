import React from "react";

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'small' | 'default';
}
