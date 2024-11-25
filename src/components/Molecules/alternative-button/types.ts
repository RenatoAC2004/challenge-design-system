import { ButtonBaseProps } from "@/components/Atoms/button-base/types";

export interface AlternativeButtonProps extends ButtonBaseProps {
  loading?: boolean;
  saved?: boolean;
}
