"use client";

import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { useSuspenseQuery } from "@tanstack/react-query";
import AccordionDeliveryItem from "./AccordionItems/AccordionDeliveryItem";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import CopyButton from "@/shared/components/UI/CopyButton";
import CopyIcon from "@/shared/components/icons/CopyIcon";
import DescriptionItem from "./DescriptionItem";
import AccordionAboutItem from "./AccordionItems/AccordionAboutItem";
import AccordionCareItem from "./AccordionItems/AccordionCareItem";
import AccordionModelItem from "./AccordionItems/AccordionModelItem";

const DescriptionTab = () => {
  const { id } = useGetProductId();
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));
  return (
    <div className="flex h-full">
      <div className="basis-[600px]">
        <div className="mb-8">
          <div className="flex gap-2 text-gray-middle mb-4">
            <span>Артикул:</span>
            <span>{data.sku}</span>
            <CopyButton
              copyText={data.sku}
              className="[&_svg]:fill-gray-middle"
            >
              <CopyIcon className="fill-gray-middle" />
            </CopyButton>
          </div>
          <DescriptionItem description={data.description} />
        </div>
        <Accordion type="multiple">
          <AccordionAboutItem meta={data.meta_data} />
          <AccordionCareItem meta={data.meta_data} />
          <AccordionModelItem meta={data.meta_data} />
          <AccordionDeliveryItem />
        </Accordion>
      </div>
      <ImageWithLoader
        wrapperClassName="flex-1 top-[-68px] bg-white"
        className="pl-12"
        src="/images/Home/Main/slider-1.jpg"
        alt="desc-image"
      />
    </div>
  );
};

export default DescriptionTab;
