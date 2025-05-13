import AddAddressDialog from "@/features/Addresses/components/AddAddressDialog";
import AddressCard from "@/features/Addresses/components/AddressCard";
import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import { useMemo } from "react";

const AddressesTab = () => {
  const { data } = useUser();

  const addresses = useMemo(
    () => data?.multiple_addresses ?? [],
    [data?.multiple_addresses]
  );

  return (
    <Container className="block">
      <div className="flex flex-col gap-12 mb-section">
        <div className="border border-main bg-gray-light py-4 px-5">
          <h4 className="text-h5">Адресная книга</h4>
        </div>
        {!addresses.length && (
          <div className="w-full flex justify-center items-center p-6 bg-main text-white">
            В настоящее время нет адресов
          </div>
        )}
        {addresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
        <div className="flex flex-col gap-4 border border-main p-6 mt-12">
          <h5 className="text-h5">Добавить новый адрес</h5>
          <div className="flex justify-end">
            <AddAddressDialog>
              <Button>Добавить</Button>
            </AddAddressDialog>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddressesTab;
