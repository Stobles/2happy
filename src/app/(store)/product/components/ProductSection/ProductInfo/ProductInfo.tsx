"use client";

import { env } from "@/config/env";
import { paths } from "@/config/paths";
import { ReactNode, useMemo } from "react";

import ShareIcon from "@/shared/components/icons/ShareIcon";

import { cn } from "@/shared/utils/cn";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { Chip } from "@/shared/components/UI/Chip";
import { Separator } from "@/shared/components/UI/Separator";

import CopyButton from "@/shared/components/UI/CopyButton";
import ProductInfoSizes from "./ProductInfoSizes";
import ProductInfoColors from "./ProductInfoColors";

import { Image } from "@/shared/types/api";

import { useGetProductByIdSuspense } from "@/features/Products/hooks/useGetProductByIdSuspense";
import { useGetProductVariations } from "@/features/Products/hooks/useGetProductVariations";
import {
  TProductAttributesHandler,
  useProductAttributes,
} from "@/features/Products/hooks/useProductAttributes";

import {
  getProductAttributes,
  getProductSale,
  getProductVariationOptions,
  getVariationPriceByAttributes,
  getVariationsImages,
} from "@/features/Products/utils";
import { getVariation } from "@/features/Products/utils/getVariation";
import { ProductVariation } from "@/features/Products/types";

const ProductInfo = ({
  id,
  defaultSize,
  defaultColor,
  handleChange,
  renderButtons,
  setImages,
  className,
}: {
  id: number;
  defaultSize?: string | null;
  defaultColor?: string | null;
  className?: string;
  handleChange?: TProductAttributesHandler;
  renderButtons?: (
    variation: ProductVariation | null,
    disabled: boolean
  ) => ReactNode;
  setImages: (images: Image[]) => void;
}) => {
  const { data: product } = useGetProductByIdSuspense(id, (data) => {
    setImages(data.images);
  });
  const { data: variations, isLoading: isLoadingVariation } =
    useGetProductVariations(id, (data) => {
      const imagesMap = getVariationsImages(data, product.images);

      const variation = getVariation(data, color, size);

      setVariation(variation);

      const variationImages = variation?.id ? imagesMap.get(variation?.id) : [];
      if (variationImages?.length) setImages(variationImages);
    });

  const { colors: defaultColors, sizes: defaultSizes } = getProductAttributes(
    product.attributes
  );

  const {
    color,
    size,
    variation,
    availableSizes,
    handleColorChange,
    handleSizeChange,
    setVariation,
  } = useProductAttributes({
    data: product,
    variations: variations?.items,
    defaultColor,
    defaultSize,
    handleChange,
    setImages,
  });

  const { sizes, colors } = useMemo(
    () => getProductVariationOptions(variations?.items),
    [variations?.items]
  );

  const variationPrice = useMemo(
    () => getVariationPriceByAttributes(variations?.items, size, color),
    [variations?.items, size, color]
  );

  const isVariationOutOfStock = variation
    ? variation?.stock_status === "outofstock"
    : false;

  return (
    <div
      className={cn(
        "flex flex-col gap-2 justify-between flex-1 basis-[49%]",
        className
      )}
    >
      <div className="flex flex-col gap-8 mb-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-h4">{product?.name}</h2>
            <CopyButton
              copyText={`${env.APP_URL}${paths.product.getHref(
                product.id,
                product.slug
              )}`}
              tooltip="Поделиться"
            >
              <ShareIcon />
            </CopyButton>
          </div>
          <span className="text-gray-middle">Артикул: {product.sku}</span>
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
                      <Chip size="normal" variant="pink" className="px-3">
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
              {isVariationOutOfStock && (
                <Chip variant="gray" size="medium" className="py-1.5">
                  Нет на складе
                </Chip>
              )}
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
          handleColorChange={handleColorChange}
          defaultColors={defaultColors}
          isLoading={isLoadingVariation}
        />
        <Separator />
        <ProductInfoSizes
          size={size}
          sizes={sizes}
          handleSizeChange={handleSizeChange}
          defaultSizes={defaultSizes}
          availableSizes={availableSizes}
          isLoading={isLoadingVariation}
        />
      </div>
      {renderButtons ? renderButtons(variation, isLoadingVariation) : null}
    </div>
  );
};

export default ProductInfo;
