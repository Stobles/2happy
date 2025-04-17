"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import ImageWithZoom from "@/shared/components/UI/ImageWithZoom";

import { Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import SliderButton from "@/shared/components/Slider/SliderButton";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import ImageGallery from "../../ImageGallery/ImageGallery";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { id } = useGetProductId();
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  return (
    <div className="product-slider flex gap-6 flex-1 basis-[51%] overflow-hidden">
      <Swiper
        className="relative thumbs-slider"
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={5}
        spaceBetween={8}
        modules={[Thumbs]}
      >
        <SliderButton
          className="w-full flex justify-center absolute top-0 z-10 bg-white/80 disabled:opacity-0"
          slideType="prev"
        >
          <ChevronDownIcon className="rotate-180" />
        </SliderButton>
        {data.images.map((image) => (
          <SwiperSlide
            key={image.id}
            data-key={image.id}
            style={{ display: thumbsSwiper ? "block" : "none" }}
          >
            <Image
              fill
              src={image.src}
              className="object-cover cursor-pointer blur-[0.5px]"
              alt={image.alt ?? "product-image-slide"}
            />
          </SwiperSlide>
        ))}
        <SliderButton
          className="w-full flex justify-center absolute bottom-0 z-10 bg-white/80 disabled:opacity-0"
          slideType="next"
        >
          <ChevronDownIcon />
        </SliderButton>
      </Swiper>

      <Swiper
        allowTouchMove={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
      >
        {data.images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <ImageGallery images={data.images} initialSlide={index}>
              <ImageWithZoom src={image.src} alt={image.alt} />
            </ImageGallery>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
