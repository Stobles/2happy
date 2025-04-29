import SizesTableDialog from "@/features/Products/components/Dialogs/SizesTableDialog";
import { VariationEntity } from "@/features/Products/utils/getProductVariationOptions";
import {
  RadioButtonsGroup,
  RadioGroupButton,
} from "@/shared/components/UI/RadioButtons";

const ProductInfoSizes = ({
  size,
  sizes,
  handleSizeChange,
  defaultSizes,
  availableSizes,
  isLoading,
}: {
  size: string;
  sizes: VariationEntity[] | undefined;
  handleSizeChange: (value: string) => void;
  defaultSizes: string[];
  availableSizes?: string[];
  isLoading?: boolean;
}) => {
  const sizesAreLoaded = !isLoading && sizes?.length;
  const hasNoSizes = !isLoading && sizes?.length === 0;

  const isItemAvailable = (item: VariationEntity) =>
    item.disabled || (availableSizes && !availableSizes.includes(item.name));
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <span className="text-body1">Размер</span>
        <SizesTableDialog
          trigger={
            <button className="text-button-xs after:bottom-[1px] link-hover">
              Таблица размеров
            </button>
          }
        />
      </div>
      {isLoading && (
        <RadioButtonsGroup disabled className="flex gap-2" value={size}>
          {defaultSizes.map((item, index) => (
            <RadioGroupButton key={index} value={item} disabled>
              {item}
            </RadioGroupButton>
          ))}
        </RadioButtonsGroup>
      )}
      {sizesAreLoaded ? (
        <RadioButtonsGroup
          className="flex gap-2"
          onValueChange={(item: string) => handleSizeChange(item)}
          value={size}
        >
          {sizes?.map((item, index) => (
            <RadioGroupButton
              key={index}
              value={item.name}
              disabled={isItemAvailable(item)}
            >
              {item.name}
            </RadioGroupButton>
          ))}
        </RadioButtonsGroup>
      ) : null}
      {hasNoSizes && <div>У товара нет размеров</div>}
    </div>
  );
};

export default ProductInfoSizes;
