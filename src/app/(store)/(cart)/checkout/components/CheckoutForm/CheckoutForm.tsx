import { PhoneInput } from "@/shared/components/UI/PhoneInput";
import CheckoutFormContacts from "./CheckoutFormContacts";

const CheckoutForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="py-4 px-5 bg-light-disabled border border-gray rounded-xs">
          <h5 className="text-h5">1. Контактные данные</h5>
        </div>
        <CheckoutFormContacts />
      </div>
    </div>
  );
};

export default CheckoutForm;
