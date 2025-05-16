"use client";

import { Button } from "@/shared/components/UI/Button";
import CheckoutUnauthorizedForm from "./CheckoutUnauthorizedForm";
import CheckoutFormPayment from "./CheckoutFormPayment";
import { useMemo, useState } from "react";
import EditIcon from "@/shared/components/icons/EditIcon";
import CheckoutFormAddress from "./CheckoutFormAddress";
import AuthModal from "@/features/Auth/components/AuthModal";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import AuthorizedView from "@/features/Auth/components/AuthorizedView";
import CheckoutAuthorizedForm from "./CheckoutAuthorizedForm";
import { useUser } from "@/shared/api/authApi";
import CheckoutFormWithAddress from "./CheckoutFormWithAddress";
import { CheckoutFormInput } from "./types";
import { getCartQueryOptions, useCart } from "@/features/Cart/api/cartQueries";
import { useCreateOrder } from "@/features/Orders/api/ordersApi";
import { useCreateUserAddress } from "@/features/Addresses/api/addressApi";
import { getQueryClient } from "@/shared/api/queryClient";
import { useDeleteCart } from "@/features/Cart/api/cartMutations";

const CheckoutForm = () => {
  const queryClient = getQueryClient();
  const [step, setStep] = useState<"contacts" | "payment">("contacts");

  const { data: user } = useUser();
  const { data: cart } = useCart();

  const [contacts, setContacts] = useState<CheckoutFormInput | null>(null);
  const [payment, setPayment] = useState<string>("");

  const { mutate: deleteCart } = useDeleteCart({});
  const { mutate: createOrder } = useCreateOrder({
    onSuccess: () => {
      deleteCart();
    },
  });
  const { mutate: createAddress } = useCreateUserAddress({});

  const defaultAuthorizedValues: CheckoutFormInput = useMemo(
    () => ({
      id: 0,
      email: user?.email ?? "",
      firstName: user?.first_name ?? "",
      lastName: user?.last_name ?? "",
      address: "",
      postalCode: "",
      country: "",
      city: "",
      phone: user?.meta.phone_number ?? "",
      agreement: false,
    }),
    [user]
  );

  const defaultAddress =
    user?.multiple_addresses.find((item) => item.id === contacts?.addressId) ||
    user?.multiple_addresses.find((item) => item.isDefaultShipping) ||
    user?.multiple_addresses[0];

  const defaultWithAddressValues: CheckoutFormInput = useMemo(
    () => ({
      email: user?.email ?? "",
      firstName: defaultAddress?.firstName ?? "",
      lastName: defaultAddress?.lastName ?? "",
      address: defaultAddress?.address ?? "",
      postalCode: defaultAddress?.postalCode ?? "",
      country: defaultAddress?.country ?? "",
      city: defaultAddress?.city ?? "",
      phone: defaultAddress?.phone ?? "",
      agreement: false,
    }),
    [user]
  );

  const userHasAddresses = !!user?.multiple_addresses.length;

  const handleSubmit = () => {
    if (!contacts) return;

    const cartItems =
      cart?.items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })) ?? [];

    if (user && contacts?.saveAddress) {
      const { addressId, saveAddress, subscribe, agreement, ...restContacts } =
        contacts;
      createAddress({
        user_id: user?.id,
        data: {
          ...restContacts,
          isDefaultShipping: false,
          isDefaultBilling: false,
        },
      });
    }

    createOrder({
      data: {
        customer_id: user?.id ?? undefined,
        billing: {
          first_name: contacts.firstName,
          last_name: contacts.lastName,
          address_1: contacts.address,
          city: contacts.city,
          state: contacts.region ?? "",
          postcode: contacts.postalCode,
          email: contacts.email,
          phone: contacts.phone,
          country: contacts.country,
        },
        shipping: {
          first_name: contacts?.firstName,
          last_name: contacts?.lastName,
          address_1: contacts?.address,
          city: contacts?.city,
          state: contacts?.region ?? "",
          postcode: contacts?.postalCode,
          country: contacts?.country,
        },
        line_items: cartItems,
        set_paid: true,
        payment_method: "robokassa",
        payment_method_title: "Банковская карта (Robokassa)",
      },
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <AuthorizedView condition={false}>
        {step === "contacts" && (
          <div className="flex flex-col gap-4">
            <p className="text-body2">Авторизуйтесь для быстрого заполнения.</p>
            <AuthModal triggerProps={{ asChild: true }}>
              <Button variant="secondary" size="small">
                Войти <ArrowRightIcon />
              </Button>
            </AuthModal>
          </div>
        )}
      </AuthorizedView>
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-2 py-4 px-5 bg-light-disabled border border-gray rounded-xs">
          <h5 className="text-h5">1. Контактные данные</h5>
          {step != "contacts" && (
            <button>
              <EditIcon
                className="size-6 cursor-pointer"
                onClick={() => setStep("contacts")}
              />
            </button>
          )}
        </div>
        {step === "contacts" && (
          <AuthorizedView condition={false}>
            <CheckoutUnauthorizedForm
              defaultValues={contacts}
              onSubmit={(data) => {
                setContacts(data);
                setStep("payment");
              }}
            />
          </AuthorizedView>
        )}

        {step === "contacts" && userHasAddresses && defaultAddress && (
          <CheckoutFormWithAddress
            defaultAddress={defaultAddress}
            defaultValues={contacts || defaultWithAddressValues}
            onSubmit={(data) => {
              setContacts(data);
              setStep("payment");
            }}
          />
        )}

        {step === "contacts" && !userHasAddresses && (
          <AuthorizedView condition={true}>
            <CheckoutAuthorizedForm
              defaultValues={contacts || defaultAuthorizedValues}
              onSubmit={(data) => {
                setContacts(data);
                setStep("payment");
              }}
            />
          </AuthorizedView>
        )}

        {step != "contacts" && contacts && (
          <CheckoutFormAddress address={contacts} />
        )}

        <div className="flex flex-col gap-10">
          <div className="py-4 px-5 bg-light-disabled border border-gray rounded-xs">
            <h5 className="text-h5">2. Оплата</h5>
          </div>
          {step === "payment" && (
            <>
              <CheckoutFormPayment
                onValueChange={(value) => setPayment(value)}
              />
              <Button
                className="w-full"
                disabled={!contacts || !payment}
                onClick={handleSubmit}
              >
                Перейти к оплате
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
