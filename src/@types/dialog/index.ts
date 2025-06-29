export type GenericDialogProps = {
  open: boolean;
  onClose?: () => void;
  title: string;
  size?: "sm" | "md" | "lg" | "xl" | "xs" | "cover" | "full" | undefined;
  primaryBtnText?: string;
  children?: React.ReactNode;
  hasFooter?: boolean;
};
