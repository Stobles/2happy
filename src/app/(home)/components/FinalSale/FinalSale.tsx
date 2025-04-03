"use server";

import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import FinalSaleList from "./components/FinalSaleList";
import { Suspense } from "react";
import { getQueryClient } from "@/shared/api/queryClient";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { categoryIds } from "@/features/Categories/consts/consts";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import FinalSaleListLoader from "./components/FinalSaleListLoader";
import CategoryLink from "@/features/Categories/components/CategoryLink";

const FinalSale = async () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getProductsQueryOptions({
      category: categoryIds["final_sale"],
      per_page: 3,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Section>
        <Container className="grid grid-cols-4 grid-rows-[544px] gap-x-6 my-section">
          <Suspense fallback={<FinalSaleListLoader />}>
            <FinalSaleList />
          </Suspense>
          <div className="flex flex-col justify-between">
            <h2 className="text-h2">
              FINAL SALE <br />/
            </h2>
            <div className="flex flex-col gap-6 mb-10">
              <CategoryLink
                category="final_sale"
                name="Final Sale"
                className="link-hover"
              >
                Смотреть все <ArrowRightIcon />
              </CategoryLink>
              <div className="relative h-[160px]">
                <Image
                  fill
                  className="object-cover object-top"
                  src="/images/Home/FinalSale/view-all.jpg"
                  alt="final-sale-section-image"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </HydrationBoundary>
  );
};

export default FinalSale;
