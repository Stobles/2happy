import { getProductVariationsQueryOptions } from "@/features/Products/api/productsApi";
import {
  RadioColorsGroup,
  RadioGroupColor,
} from "@/features/Products/components/Colors/RadioColors";
import { getProductVariations } from "@/features/Products/utils/getProductVariations";
import { Separator } from "@/shared/components/UI/Separator";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

const ProductInfoColors = ({
  id,
  color,
  setColor,
  defaultColors,
}: {
  id: number;
  color: { slug: string; variation: string };
  setColor: Dispatch<SetStateAction<{ slug: string; variation: string }>>;
  defaultColors: string[];
}) => {
  const { data, isFetching } = useQuery(getProductVariationsQueryOptions(id));

  const { colors } = getProductVariations(data?.items);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-body1">Цвет</span>
        <Separator className="h-4" orientation="vertical" />
        <span className="text-description text-gray-middle">
          {color.variation}
        </span>
      </div>
      {isFetching ? (
        <RadioColorsGroup disabled className="flex gap-2">
          {defaultColors.map((item, index) => (
            <RadioGroupColor disabled key={index} value={item} color={item} />
          ))}
        </RadioColorsGroup>
      ) : (
        <RadioColorsGroup className="flex gap-2" defaultValue="default">
          {colors.map((item) => (
            <RadioGroupColor
              key={item.name}
              value={item.name}
              color={item.name}
              onClick={() =>
                setColor({ slug: item.slug, variation: item.name })
              }
              disabled={item.disabled}
            />
          ))}
        </RadioColorsGroup>
      )}
    </div>
  );
};

export default ProductInfoColors;
