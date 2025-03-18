"use client";

import Container from "@/components/UI/Container";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { CATEGORIES } from "./consts";
import Catalog from "../components/Catalog";
import SectionImage from "@/components/UI/SectionImage";

const CatalogPage = () => {
  return (
    <Container className="my-section flex flex-col gap-12">
      <SectionImage />
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
