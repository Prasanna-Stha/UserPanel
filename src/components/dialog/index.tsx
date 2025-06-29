import type { GenericDialogProps } from "@/@types/dialog";
import {
  Button,
  CloseButton,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  Portal,
} from "@chakra-ui/react";

const Dialog = ({
  open,
  onClose,
  title,
  primaryBtnText,
  children,
  size,
  hasFooter,
}: GenericDialogProps) => {
  return (
    <DialogRoot
      open={open}
      onOpenChange={onClose}
      placement={"center"}
      size={size}
    >
      <Portal>
        <DialogBackdrop zIndex={"modal"} />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>

            <DialogBody>{children}</DialogBody>

            {hasFooter && (
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button>{primaryBtnText}</Button>
              </DialogFooter>
            )}
            <DialogCloseTrigger asChild>
              <CloseButton size="sm" />
            </DialogCloseTrigger>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
};

export default Dialog;
