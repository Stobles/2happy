"use client";

import { useBreadcrumbs } from "@/components/Layout/CatalogLayout/components/Breadcrumbs/context/BreadcrumbsContext";
import Container from "@/components/UI/Container";
import Image from "next/image";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import ProductInfo from "../components/ProductInfo/ProductInfo";

const ProductPage = () => {
  useBreadcrumbs("12");
  return (
    <Container className="my-section">
      <Image
        className="absolute w-[992px] h-[112px] top-[-64px] right-0 z-[-1]"
        width={992}
        height={112}
        src="/images/section-logo.png"
        alt="section-logo"
      />
      <div className="w-full flex gap-12">
        <ProductSlider />
        <ProductInfo />
      </div>
    </Container>
  );
};

export default ProductPage;
