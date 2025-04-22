import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";

const CartSheetEmpty = () => {
  const { data } = useUser();
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full h-full">
      <p className="text-h5 text-gray-dark">
        Вы пока ничего не добавили в корзину
      </p>
      <div className="flex flex-col gap-4 w-full max-w-[320px]">
        <Button variant="secondary" size="large" className="w-full">
          Продолжить покупки
        </Button>
        {!data && (
          <Button variant="tertiary" size="large" className="w-full">
            Войти
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartSheetEmpty;
