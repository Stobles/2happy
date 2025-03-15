"use client";

import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";
import ProductCard from "@/features/Products/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { SIZES, SLIDES, SLIDES_SIZES } from "./consts";
import SliderButton from "@/components/UI/SliderButton";
import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";

const CustomSlide = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-4 pt-10 pb-6 bg-main">
      <span className="text-h4 text-white text-center">
        Погрузитесь в мир стильных новинок!
      </span>
      <Button className="w-full" variant="primary" size="medium">
        Все новинки <ArrowUpRightIcon />
      </Button>
    </div>
  );
};

const Slider = () => {
  return (
    <div className="overflow-hidden pb-4">
      <Swiper className="relative" spaceBetween={24} slidesPerView="auto">
        {SLIDES.map((slide, index) => {
          if (slide === "custom") {
            return (
              <SwiperSlide
                style={{
                  width: "288px",
                  height: "280px",
                }}
                key="custom"
              >
                <CustomSlide />
              </SwiperSlide>
            );
          } else {
            const size = SLIDES_SIZES[index];
            const { width, height } = SIZES[size];
            return (
              <SwiperSlide
                key={slide.id}
                style={{
                  width,
                  height,
                }}
              >
                <ProductCard product={slide} />
              </SwiperSlide>
            );
          }
        })}
        <div className="absolute flex gap-4 right-0 bottom-0">
          <SliderButton slideType="prev" className="group">
            <ArrowRightIcon className="w-[48px] h-[48px] rotate-180 fill-main group-disabled:fill-disabled" />
          </SliderButton>
          <SliderButton slideType="next" className="group">
            <ArrowRightIcon className="w-[48px] h-[48px] fill-main group-disabled:fill-disabled" />
          </SliderButton>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
