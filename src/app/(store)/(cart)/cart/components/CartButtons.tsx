import { IconButton } from "@/shared/components/UI/IconButton";
import CartItemChangeDialog from "./CartItemChangeDialog";
import EditIcon from "@/shared/components/icons/EditIcon";
import HeartIcon from "@/shared/components/icons/HeartIcon";
import { CartItemResponse } from "@/features/Cart/types";

const CartButtons = ({ cartItem }: { cartItem: CartItemResponse }) => {
  return (
    <div className="flex justify-end gap-4">
      <IconButton
        variant="secondary"
        size="small"
        className="border border-gray"
      >
        <HeartIcon />
      </IconButton>
      <CartItemChangeDialog
        cartItem={cartItem}
        trigger={
          <IconButton
            variant="secondary"
            size="small"
            className="border border-gray"
          >
            <EditIcon />
          </IconButton>
        }
      />
    </div>
  );
};

export default CartButtons;
