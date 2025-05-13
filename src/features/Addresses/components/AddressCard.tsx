import { Button } from "@/shared/components/UI/Button";
import DeleteAddressDialog from "./DeleteAddressDialog";
import { UserAddress } from "@/shared/types/api";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { useDeleteUserAddress } from "../api/addressApi";
import { useUser } from "@/shared/api/authApi";
import { useState } from "react";
import UpdateAddressDialog from "./UpdateAddressDialog";
import { notify } from "@/shared/lib/notify";

const AddressCard = ({ address }: { address: UserAddress }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { data: user } = useUser();

  const { mutate, isPending } = useDeleteUserAddress({
    onSuccess: () => {
      setOpen(false);

      notify({ message: "Адрес успешно удален", variant: "success" });
    },
  });
  return (
    <div className="flex flex-col gap-4 border border-main p-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h5 className="text-h5">
            {address.firstName} {address.lastName}
          </h5>
          {address.isDefaultShipping && (
            <span className="text-body2 text-gray-middle">По умолчанию</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span>{address.address}</span>
          <span>{address.country}</span>
          <span>{address.city}</span>
          <span>{formatPhoneNumberIntl(address.phone)}</span>
        </div>
      </div>
      <div className="flex justify-end gap-6">
        <UpdateAddressDialog address={address}>
          <Button variant="secondary">Редактировать</Button>
        </UpdateAddressDialog>
        <DeleteAddressDialog
          open={open}
          setOpen={setOpen}
          onApply={() => {
            mutate({ id: address.id, user_id: user?.id ?? 0 });
          }}
          isLoading={isPending}
        >
          <Button disabled={isPending}>Удалить</Button>
        </DeleteAddressDialog>
      </div>
    </div>
  );
};

export default AddressCard;
