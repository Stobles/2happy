import {
  RadioColorsGroup,
  RadioGroupColor,
} from "@/features/Products/components/Colors/RadioColors";
import { VariationEntity } from "@/features/Products/utils/getProductVariationOptions";
import { Separator } from "@/shared/components/UI/Separator";
import { Dispatch, SetStateAction } from "react";

const ProductInfoColors = ({
  color,
  colors,
  setColor,
  defaultColors,
  isLoading,
}: {
  color: string;
  colors: VariationEntity[] | undefined;
  setColor: Dispatch<SetStateAction<string>>;
  defaultColors: string[];
  isLoading?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-body1">Цвет</span>
        <Separator className="h-4" orientation="vertical" />
        <span className="text-description text-gray-middle">{color}</span>
      </div>
      {isLoading ? (
        <RadioColorsGroup disabled className="flex gap-2">
          {defaultColors.map((item, index) => (
            <RadioGroupColor disabled key={index} value={item} color={item} />
          ))}
        </RadioColorsGroup>
      ) : (
        <RadioColorsGroup
          onValueChange={(item) => setColor(item)}
          className="flex gap-2"
          value={color}
        >
          {colors?.map((item) => (
            <RadioGroupColor
              key={item.name}
              value={item.name}
              color={item.name}
              onClick={() => setColor(item.name)}
              disabled={item.disabled}
            />
          ))}
        </RadioColorsGroup>
      )}
    </div>
  );
};

export default ProductInfoColors;
