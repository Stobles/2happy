"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";
import { Progress } from "@/components/UI/Progress";

import ChevronRightIcon from "@/components/icons/Chevron/ChevronRightIcon";
import ChevronLeftIcon from "@/components/icons/Chevron/ChevronLeftIcon";
import SliderButton from "@/components/UI/SliderButton";
import ImageWithFallback from "@/components/UI/ImageWithFallback";

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

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);

  const progressValue = (activeIndex / totalSlides) * 100;

  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => {
        setTotalSlides(swiper.slides.length);
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
      className="main-slider basis-full overflow-hidden h-[720px]"
      slidesPerView={1}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {SLIDES.map((item) => (
        <SwiperSlide key={item}>
          <ImageWithFallback src={item} fallbackSrc={item} alt="slider-image" />
        </SwiperSlide>
      ))}

      <div className="w-full flex flex-col mt-4">
        <div className="flex justify-between mb-[6px]">
          <span className="text-button-medium text-gray-middle">{`${activeIndex}/${totalSlides}`}</span>
          <div className="flex gap-2">
            <SliderButton className="disabled:opacity-40" slideType="prev">
              <ChevronLeftIcon />
            </SliderButton>
            <SliderButton className="disabled:opacity-40" slideType="next">
              <ChevronRightIcon />
            </SliderButton>
          </div>
        </div>
        <Progress className="h-[2px]" value={progressValue} />
      </div>
    </Swiper>
  );
};

export default Slider;
