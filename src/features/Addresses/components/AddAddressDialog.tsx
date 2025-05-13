import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { ReactNode, useState } from "react";
import AddressForm from "./AddressForm";
import { notify } from "@/shared/lib/notify";
import { useUser } from "@/shared/api/authApi";
import {
  UpdateUserAddressInput,
  useCreateUserAddress,
} from "../api/addressApi";

const AddAddressDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { data: user } = useUser();

  const { mutate, isPending } = useCreateUserAddress({
    onSuccess: () => {
      setOpen(false);
    },
    onError: (err) => {
      if (err.response?.data.message)
        notify({ message: err.response?.data.message, variant: "error" });
    },
  });

  const onSubmit = (data: UpdateUserAddressInput) => {
    mutate({ user_id: user?.id ?? 0, data });
  };
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-[1224px] p-20">
        <DialogHeader className="sr-only">
          <DialogTitle className="sr-only">
            Добавьте новый адрес для доставки
          </DialogTitle>
          <DialogDescription className="sr-only">
            Добавьте новый адрес для доставки
          </DialogDescription>
          <DialogClose className="top-6 right-10" />
        </DialogHeader>
        <AddressForm onSubmit={onSubmit} isPending={isPending} />
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressDialog;
