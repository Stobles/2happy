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
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import ProductInfoSizes from "./ProductInfoSizes";
import { getProductAttributes } from "@/features/Products/utils/getProductAttributes";
import ProductInfoColors from "./ProductInfoColors";
import { useState } from "react";

const ProductInfo = () => {
  const { id, slug } = useGetProductId();
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  const { colors, sizes } = getProductAttributes(data.attributes);

  const [color, setColor] = useState<{ slug: string; variation: string }>({
    slug: "",
    variation: "",
  });

  const [size, setSize] = useState<{ slug: string; variation: string }>({
    slug: "",
    variation: "",
  });

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
              <span className="text-h5 text-gray-middle line-through">
                85 000 T
              </span>
              <span className="text-h4">25 000 T</span>
              <Chip size="small" variant="pink">
                -70%
              </Chip>
            </div>

            <div className="text-gray-middle text-description">
              Включая налоги, без стоимости доставки
            </div>
          </div>
        </div>
        <Separator />
        <ProductInfoColors
          id={id}
          color={color}
          setColor={setColor}
          defaultColors={colors}
        />
        <Separator />
        <ProductInfoSizes
          id={id}
          size={size}
          setSize={setSize}
          defaultSizes={sizes}
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
        <Button className="[&_svg]:fill-transparent" size="iconNormal">
          <HeartIcon className="stroke-white" />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
