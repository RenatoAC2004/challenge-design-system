export interface SingleActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "default";
  children?: React.ReactNode;
}
