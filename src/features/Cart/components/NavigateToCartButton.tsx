import AuthModal from "@/features/Auth/components/AuthModal";
import { Button, ButtonProps } from "@/shared/components/UI/Button";
import { useNavigateCheckout } from "../hooks/useNavigateCheckout";
import { useUser } from "@/shared/api/authApi";
import Link from "next/link";

const NavigateToCartButton = ({
  buttonProps,
}: {
  buttonProps?: ButtonProps & { text?: string };
}) => {
  const { data: user } = useUser();

  const buttonDisabled = buttonProps?.disabled;

  const { link, handleClick } = useNavigateCheckout({
    disabled: buttonDisabled,
  });

  return (
    <>
      {user ? (
        <Link
          onClick={handleClick}
          href={link}
          className={`${buttonDisabled && "pointer-events-none"}`}
        >
          <Button
            variant="primary"
            size="medium"
            className="w-full"
            disabled={buttonDisabled}
            {...buttonProps}
          >
            {buttonProps?.text ? buttonProps.text : "Перейти к оплате"}
          </Button>
        </Link>
      ) : (
        <AuthModal
          triggerProps={{ asChild: true, disabled: !!user || buttonDisabled }}
          buttonSlot={
            <Button
              className="w-full"
              asChild
              {...buttonProps}
              variant="secondary"
              size="normal"
            >
              <Link onClick={handleClick} href={link}>
                Продолжить как гость
              </Link>
            </Button>
          }
        >
          <Button
            variant="primary"
            size="medium"
            className="w-full"
            disabled={buttonDisabled}
            {...buttonProps}
            onClick={() => {}}
          >
            {buttonProps?.text ? buttonProps.text : "Перейти к оплате"}
          </Button>
        </AuthModal>
      )}
    </>
  );
};

export default NavigateToCartButton;
