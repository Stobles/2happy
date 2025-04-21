"use client";

import HeartIcon from "@/shared/components/icons/HeartIcon";
import ShareIcon from "@/shared/components/icons/ShareIcon";
import { Button } from "@/shared/components/UI/Button";
import { Chip } from "@/shared/components/UI/Chip";
import { Separator } from "@/shared/components/UI/Separator";
import OutOfStockDialog from "@/features/Products/components/Dialogs/OutOfStockDialog";
import { env } from "@/config/env";
import { paths } from "@/config/paths";
import CopyButton from "@/shared/components/UI/CopyButton";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  getProductByIdQueryOptions,
  getProductVariationsQueryOptions,
} from "@/features/Products/api/productsApi";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import ProductInfoSizes from "./ProductInfoSizes";
import { getProductAttributes } from "@/features/Products/utils/getProductAttributes";
import ProductInfoColors from "./ProductInfoColors";
import { useEffect, useMemo, useState } from "react";
import { getAttributesByProductPrice } from "@/features/Products/utils/getAttributesByProductPrice";
import {
  createColorToSizeMap,
  getProductVariationOptions,
} from "@/features/Products/utils/getProductVariationOptions";
import { getVariationPriceByAttributes } from "@/features/Products/utils/getVariationPriceByAttributes";
import { cn } from "@/shared/lib/utils";
import { getProductSale } from "@/features/Products/utils/getProductSale";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { IconButton } from "@/shared/components/UI/IconButton";

const ProductInfo = () => {
  const { id, slug } = useGetProductId();
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  const { colors: defaultColors, sizes: defaultSizes } = getProductAttributes(
    data.attributes
  );

  const { data: variations, isLoading: isLoadingVariation } = useQuery(
    getProductVariationsQueryOptions(id)
  );

  const { size: defaultSize, color: defaultColor } =
    getAttributesByProductPrice(data, variations?.items);

  const [color, setColor] = useState<string>(defaultColor);
  const [size, setSize] = useState<string>(defaultSize);

  const variationPrice = getVariationPriceByAttributes(
    variations?.items,
    size,
    color
  );

  const { sizes, colors } = useMemo(
    () => getProductVariationOptions(variations?.items),
    [variations?.items]
  );

  const colorToSizeMap = useMemo(
    () => createColorToSizeMap(variations?.items),
    [variations?.items]
  );

  const availableSizesByColor = colorToSizeMap.get(color);

  useEffect(() => {
    setSize(defaultSize);
    setColor(defaultColor);
  }, [defaultSize, defaultColor]);

  return (
    <div className="flex flex-col gap-2 justify-between flex-1 basis-[49%]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-h4">{data?.name}</h2>
            <CopyButton
              copyText={`${env.APP_URL}${paths.catalog.product.getHref(
                id,
                slug
              )}`}
              tooltip="Поделиться"
            >
              <ShareIcon />
            </CopyButton>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {isLoadingVariation && (
                <Skeleton className="w-[120px] h-[28px]" />
              )}
              {!isLoadingVariation && variationPrice && (
                <div className="flex gap-2 items-center">
                  <span
                    className={cn(
                      "text-h4 text-main",
                      variationPrice.on_sale &&
                        "text-h5 line-through text-gray-middle"
                    )}
                  >
                    {variationPrice.regular_price} &#8376;
                  </span>
                  {variationPrice.on_sale && (
                    <>
                      <span className="text-h4">
                        {variationPrice.sale_price} &#8376;
                      </span>
                      <Chip size="medium" variant="pink">
                        {`- ${getProductSale(
                          +variationPrice.regular_price,
                          +variationPrice.sale_price
                        )}%`}
                      </Chip>
                    </>
                  )}
                </div>
              )}

              {!isLoadingVariation && !variationPrice && <div>Нет цены</div>}
            </div>

            <div className="text-gray-middle text-description">
              Включая налоги, без стоимости доставки
            </div>
          </div>
        </div>
        <Separator />
        <ProductInfoColors
          color={color}
          colors={colors}
          setColor={setColor}
          defaultColors={defaultColors}
          isLoading={isLoadingVariation}
        />
        <Separator />
        <ProductInfoSizes
          size={size}
          sizes={sizes}
          setSize={setSize}
          defaultSizes={defaultSizes}
          availableSizes={availableSizesByColor}
          isLoading={isLoadingVariation}
        />
      </div>
      <div className="flex gap-2">
        <Button className="w-full">Добавить в корзину</Button>
        <OutOfStockDialog
          trigger={
            <Button className="w-full" variant="secondary">
              Купить
            </Button>
          }
        />
        <IconButton className="[&_svg]:fill-transparent" size="normal">
          <HeartIcon className="stroke-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductInfo;
