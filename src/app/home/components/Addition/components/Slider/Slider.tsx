"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Navigation } from "swiper/modules";
import ItemCard from "@/features/Fashion/components/ItemCard";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import SliderButton from "@/components/UI/SliderButton";
import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";
import { getSliderMarginLeft } from "./utils/getSliderMarginLeft";

const SLIDES = [
  "/images/ComplementFashion/1.png",
  "/images/ComplementFashion/2.png",
  "/images/ComplementFashion/3.png",
  "/images/ComplementFashion/4.png",
  "/images/ComplementFashion/5.png",
  "/images/ComplementFashion/6.png",
  "/images/ComplementFashion/7.png",
];

const SPACE_BETWEEN = 24;

const Slider = () => {
  const swiperRef = useRef<HTMLElement | null>(null);

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper.wrapperEl;
  };

  const onSlideChange = (swiper: SwiperType) => {
    const index = swiper.activeIndex;
    const slideMarginLeft = getSliderMarginLeft(index, swiper.translate);
    swiperRef.current?.style.setProperty("margin-left", slideMarginLeft);
  };

  return (
    <Swiper
      className="complement-fashion flex justify-start !h-[640px]"
      centeredSlides={false}
      spaceBetween={SPACE_BETWEEN}
      slidesPerView="auto"
      modules={[Navigation]}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
    >
      {SLIDES.map((item) => {
        return (
          <SwiperSlide key={item}>
            <ItemCard src={item} href="/" />
          </SwiperSlide>
        );
      })}
      <span className="absolute text-h3 left-[calc(var(--active-slide-width)+24px)] top-[calc(var(--slide-height)+20px)] z-[1]">
        Стильными акцентами
      </span>
      <div className="absolute right-0 flex gap-4">
        <SliderButton type="prev">
          <ArrowRightIcon className="fill-white rotate-180 size-12" />
        </SliderButton>
        <SliderButton type="next">
          <ArrowRightIcon className="fill-white size-12" />
        </SliderButton>
      </div>
    </Swiper>
  );
};

export default Slider;
