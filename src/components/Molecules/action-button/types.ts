import { ButtonBaseProps } from "@/components/Atoms/button-base/types";

export interface ActionButtonProps extends ButtonBaseProps {
  label: string;
  loading?: boolean;
  saved?: boolean;
}
