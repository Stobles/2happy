"use client";

import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import ProductCard from "@/features/Products/components/Cards/ProductCard";
import { Product } from "@/features/Products/types";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { useGetProductById } from "@/features/Products/hooks/useGetProductById ";
import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard, {
  ProductCardLoader,
} from "@/features/Products/components/Cards/ProductServerCard";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";

const PRODUCTS: Product[] = [
  {
    id: "id1",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [
      { id: 1, size: "XS" },
      { id: 2, size: "S" },
      { id: 3, size: "M" },
    ],
    price: 50000,
    sale: {
      price: 25000,
      amount: 25,
    },
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
  {
    id: "id2",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
  {
    id: "id3",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
  {
    id: "id4",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Home/Fashion/fashion-1.jpg",
  },
];

const AdditionSection = () => {
  const { id } = useGetProductId();

  const { data: product } = useGetProductById(id);

  const { data, isLoading } = useQuery({
    ...getProductsQueryOptions({ include: product?.cross_sell_ids }),
    enabled: !!product?.cross_sell_ids.length,
  });

  if (!product?.cross_sell_ids.length) return null;
  return (
    <ProductsScrollableSection
      title="Дополните свой образ"
      data={data?.items}
      isLoading={isLoading}
    />
  );
};

export default AdditionSection;
