"use client";

import HeartIcon from "@/components/icons/HeartIcon";
import Link from "next/link";
import { Product } from "../types";
import { getProductChip } from "../utils/getProductChip";
import { Chip } from "@/components/UI/Chip";
import { MouseEvent } from "react";
import ImageWithFallback from "@/components/UI/ImageWithFallback";

const ProductCard = ({ product }: { product: Product }) => {
  const { id, title, colors, sizes, price, image, sale } = product;

  const chip = getProductChip(product);

  const handleFavoriteClick = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
  };
  return (
    <article className="group/product w-full h-full">
      <Link href={`/${id}`} className="flex flex-col h-full gap-4">
        <div className="relative h-full">
          {chip && (
            <Chip
              className="absolute top-4 left-4 z-10"
              variant={chip.type}
              text={chip.text}
            />
          )}
          <HeartIcon
            role="button"
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 z-10 opacity-0 group-hover/product:opacity-100 hover:fill-main"
          />
          <ImageWithFallback
            src={image}
            className="group-hover/product:opacity-60 transition-opacity"
            fallbackSrc={image}
            alt="product-image"
          />
        </div>
        <div>
          <h5 className="text-h5 mb-5">{title}</h5>
          <div className="w-full relative h-6">
            <div className="absolute w-full flex items-center justify-between gap-2 opacity-0 group-hover/product:opacity-100 transition-opacity">
              <div className="flex gap-2">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    style={{
                      backgroundColor: `${color.hex}`,
                    }}
                    className={`w-[16px] h-[16px]`}
                  />
                ))}
              </div>
              <div className="flex gap-2 text-gray-middle">
                {sizes.map((size) => (
                  <span key={size.id} className="text-body2">
                    {size.size}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute flex w-full gap-2 opacity-100 group-hover/product:opacity-0 transition-opacity">
              <span className={`${sale && "text-gray-middle line-through"}`}>
                {price} &#8376;
              </span>
              {sale && <span className="text-red">{sale.price} &#8376;</span>}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
