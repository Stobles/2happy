"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

import { Autoplay, Navigation } from "swiper/modules";
import ItemCard from "@/features/Fashion/components/ItemCard";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import SliderButton from "@/components/UI/SliderButton";
import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";
import { getSliderMarginLeft } from "./utils/getSliderMarginLeft";

const SLIDES = [
  "/images/Home/ComplementFashion/1.png",
  "/images/Home/ComplementFashion/2.png",
  "/images/Home/ComplementFashion/3.png",
  "/images/Home/ComplementFashion/4.png",
  "/images/Home/ComplementFashion/5.png",
  "/images/Home/ComplementFashion/6.png",
  "/images/Home/ComplementFashion/7.png",
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
      autoplay={{ delay: 3000 }}
      className="complement-fashion flex justify-start !h-[640px]"
      centeredSlides={false}
      spaceBetween={SPACE_BETWEEN}
      slidesPerView="auto"
      modules={[Navigation, Autoplay]}
      onSwiper={onSwiper}
      onSlideChange={onSlideChange}
      onSetTranslate={onSlideChange}
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
        <SliderButton slideType="prev" className="group">
          <ArrowRightIcon className="rotate-180 size-12 fill-white group-disabled:fill-gray-dark" />
        </SliderButton>
        <SliderButton slideType="next" className="group">
          <ArrowRightIcon className="size-12 fill-white group-disabled:fill-gray-dark" />
        </SliderButton>
      </div>
    </Swiper>
  );
};

export default Slider;
