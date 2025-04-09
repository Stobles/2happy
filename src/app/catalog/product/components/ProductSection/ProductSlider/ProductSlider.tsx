"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import ImageWithZoom from "@/shared/components/UI/ImageWithZoom";

import { Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

const SLIDES = [
  "/images/Home/Main/slider-1.jpg",
  "/images/Home/Main/slider-2.jpg",
  "/images/Home/Main/slider-3.jpg",
  "/images/Home/Main/slider-4.jpg",
  "/images/Home/Main/slider-5.jpg",
  "/images/Home/Main/slider-6.jpg",
];

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="product-slider flex gap-6 flex-1 basis-[51%] overflow-hidden">
      <Swiper
        className="thumbs-slider"
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={5}
        spaceBetween={8}
        modules={[Thumbs]}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide
            key={slide}
            style={{ display: thumbsSwiper ? "block" : "none" }}
          >
            <Image
              fill
              src={slide}
              className="object-cover cursor-pointer blur-[0.5px]"
              alt="product-slide-thumb"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        allowTouchMove={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide}>
            <ImageWithZoom src={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
