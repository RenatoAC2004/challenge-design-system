import { ButtonBaseProps } from "@/components/Atoms/button-base/types";

export interface ActionButtonProps extends ButtonBaseProps {
  loading?: boolean;
  saved?: boolean;
}
