import { paths } from "@/config/paths";
import { useCheckoutStore } from "../store/checkoutStore";

export const useNavigateCheckout = ({ disabled }: { disabled?: boolean }) => {
  const { setToken } = useCheckoutStore();

  const handleClick = () => {
    if (disabled) return;
    const token = new Date().toUTCString();

    setToken(token);
  };

  return { link: disabled ? "" : paths.checkout.getHref(), handleClick };
};
