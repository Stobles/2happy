"use client";

import HeartIcon from "@/shared/components/icons/HeartIcon";
import Link from "next/link";
import { ProductServer } from "../../types";
import { Chip } from "@/shared/components/UI/Chip";
import { MouseEvent } from "react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import ColorSquare from "../Colors/ColorSquare";
import { paths } from "@/config/paths";
import { getProductCardInfo } from "../../utils/getProductCardInfo";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { useQueryClient } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "../../api/productsApi";

const ProductServerCard = ({ product }: { product: ProductServer }) => {
  const queryClient = useQueryClient();
  const [_, setRecentProducts] = useLocalStorage<number[]>(
    "recentProducts",
    []
  );
  const { colors, image, sizes, chip } = getProductCardInfo(product);

  const handleLinkClick = () => {
    queryClient.setQueryData(
      getProductByIdQueryOptions(product.id).queryKey,
      product
    );
    setRecentProducts((oldData) => [
      product.id,
      ...oldData.filter((item) => item != product.id).slice(0, 10),
    ]);
  };

  const handleFavoriteClick = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
  };

  return (
    <article className="group/product w-full h-full">
      <Link
        onClick={handleLinkClick}
        href={paths.product.getHref(product.id, product.name)}
        className="flex flex-col h-full gap-4"
      >
        <div className="relative h-full">
          {chip && (
            <Chip
              className="absolute top-4 left-4 z-10"
              variant={chip.type}
              size="small"
            >
              {chip.text}
            </Chip>
          )}
          <HeartIcon
            role="button"
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 z-50 opacity-0 group-hover/product:opacity-100 hover:fill-main"
          />
          {image && (
            <ImageWithLoader
              src={image.src}
              className="group-hover/product:opacity-60 transition-opacity"
              alt={image.alt ?? "product-image"}
            />
          )}
        </div>
        <div>
          <h5 className="text-h5 mb-2 h-[48px] line-clamp-2">{product.name}</h5>
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
              {product.on_sale ? (
                <>
                  <span className={"text-gray-middle line-through"}>
                    {product.regular_price} &#8376;
                  </span>
                  <span className="text-red">{product.sale_price} &#8376;</span>
                </>
              ) : (
                <span>{product.price} &#8376;</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductServerCard;
