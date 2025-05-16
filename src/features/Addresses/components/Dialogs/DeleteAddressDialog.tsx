import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { Button } from "@/shared/components/UI/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";

const DeleteAddressDialog = ({
  children,
  open,
  setOpen,
  onApply,
  isLoading,
}: {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onApply: () => void;
  isLoading: boolean;
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="px-14 pt-4 pb-10">
        <DialogHeader>
          <DialogTitle className="sr-only">Удалить адрес</DialogTitle>
          <DialogDescription className="text-body2 pt-2">
            Вы действительно хотите удалить этот адрес?
          </DialogDescription>
          <DialogClose className="top-4 right-4" />
        </DialogHeader>
        <div className="flex justify-end gap-6">
          <Button variant="secondary" size="medium" disabled={isLoading}>
            Отменить
          </Button>
          <Button size="medium" onClick={onApply} disabled={isLoading}>
            {isLoading && <LoaderIcon className="animate-spin" />}
            Удалить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAddressDialog;
