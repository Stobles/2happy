"use client";

import HeartIcon from "@/shared/components/icons/HeartIcon";
import Link from "next/link";
import { ProductServer } from "../../types";
import { Chip } from "@/shared/components/UI/Chip";
import { MouseEvent } from "react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import ColorSquare from "../Colors/ColorSquare";
import { paths } from "@/config/paths";
import { getProductChip } from "../../utils/getProductChip";

const ProductServerCard = ({ product }: { product: ProductServer }) => {
  const {
    id,
    name,
    price,
    sale_price,
    regular_price,
    images,
    on_sale,
    attributes,
  } = product;

  const handleFavoriteClick = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
  };

  const productChip = getProductChip(product);

  const productImage = images?.[0] ?? null;

  const colors =
    attributes?.find((attr) => attr.slug === "pa_color")?.options ?? [];
  const sizes =
    attributes?.find((attr) => attr.slug === "pa_size")?.options ?? [];

  return (
    <article className="group/product w-full h-full">
      <Link
        href={paths.catalog.product.getHref(id)}
        className="flex flex-col h-full gap-4"
      >
        <div className="relative h-full">
          {productChip && (
            <Chip
              className="absolute top-4 left-4 z-10"
              variant={productChip.type}
              size="small"
            >
              {productChip.text}
            </Chip>
          )}
          <HeartIcon
            role="button"
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 z-50 opacity-0 group-hover/product:opacity-100 hover:fill-main"
          />
          {productImage && (
            <ImageWithLoader
              src={productImage.src}
              className="group-hover/product:opacity-60 transition-opacity"
              alt={productImage.alt ?? "product-image"}
            />
          )}
        </div>
        <div>
          <h5 className="text-h5 mb-5">{name}</h5>
          <div className="w-full relative h-6">
            <div className="absolute w-full flex items-center justify-between gap-2 opacity-0 group-hover/product:opacity-100 transition-opacity">
              <div className="flex gap-2">
                {colors.map((color: string) => (
                  <ColorSquare key={color} color={color} />
                ))}
              </div>
              <div className="flex gap-2 text-gray-middle">
                {sizes.map((size: string) => (
                  <span key={size} className="text-body2">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute flex w-full gap-2 opacity-100 group-hover/product:opacity-0 transition-opacity">
              {on_sale ? (
                <>
                  <span className={"text-gray-middle line-through"}>
                    {regular_price} &#8376;
                  </span>
                  <span className="text-red">{sale_price} &#8376;</span>
                </>
              ) : (
                <span>{price} &#8376;</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductServerCard;
