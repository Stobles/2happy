import { getProductVariationsQueryOptions } from "@/features/Products/api/productsApi";
import SizesTableDialog from "@/features/Products/components/Dialogs/SizesTableDialog";
import { getProductVariations } from "@/features/Products/utils/getProductVariations";
import {
  RadioButtonsGroup,
  RadioGroupButton,
} from "@/shared/components/UI/RadioButtons";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

const ProductInfoSizes = ({
  id,
  setSize,
  defaultSizes,
}: {
  id: number;
  size: { slug: string; variation: string };
  setSize: Dispatch<SetStateAction<{ slug: string; variation: string }>>;
  defaultSizes: string[];
}) => {
  const { data, isFetching } = useQuery(getProductVariationsQueryOptions(id));
  const { sizes } = getProductVariations(data?.items);
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
      {isFetching ? (
        <RadioButtonsGroup
          disabled
          className="flex gap-2"
          defaultValue="default"
        >
          {defaultSizes.map((item, index) => (
            <RadioGroupButton key={index} value={item} disabled>
              {item}
            </RadioGroupButton>
          ))}
        </RadioButtonsGroup>
      ) : (
        <RadioButtonsGroup className="flex gap-2" defaultValue="default">
          {sizes.map((item, index) => (
            <RadioGroupButton
              key={index}
              value={item.name}
              onClick={() => setSize({ slug: item.slug, variation: item.name })}
            >
              {item.name}
            </RadioGroupButton>
          ))}
        </RadioButtonsGroup>
      )}
    </div>
  );
};

export default ProductInfoSizes;
