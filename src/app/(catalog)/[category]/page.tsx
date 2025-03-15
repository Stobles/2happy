"use client";

import Container from "@/components/UI/Container";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import Image from "next/image";
import { CATEGORIES } from "./consts";
import Catalog from "../components/Catalog";

const CatalogPage = () => {
  return (
    <Container className="my-section flex flex-col gap-12">
      <Image
        className="absolute w-[992px] h-[112px] top-[-64px] right-0 z-[-1]"
        width={992}
        height={112}
        src="/images/section-logo.png"
        alt="section-logo"
      />

      <div className="w-full flex flex-col gap-16">
        <div className="flex items-end gap-2">
          <h2 className="text-h2">Каталог /</h2>
          <span className="text-body2 mb-1 text-gray-middle">346 товаров</span>
        </div>
        <CategorySlider categories={CATEGORIES} />
      </div>
      <Catalog />
    </Container>
  );
};

export default CatalogPage;
