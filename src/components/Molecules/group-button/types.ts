import { ActionButtonProps } from "@/components/Molecules/action-button/types";
import { AlternativeButtonProps } from "@/components/Molecules/alternative-button/types";

export interface GroupButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  actionProps: ActionButtonProps;
  alternativeProps: AlternativeButtonProps;
}