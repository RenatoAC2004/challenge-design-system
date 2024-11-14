export interface ActionButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  saved?: boolean;
  onClick?: () => void;
}
