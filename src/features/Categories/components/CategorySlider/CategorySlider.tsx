import { Button } from "@/components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../types";

import Link from "next/link";
import SliderButton from "@/components/UI/SliderButton";
import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const CategorySlider = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="category-slider">
      <Swiper
        slidesPerView="auto"
        onSwiper={(swiper) => (swiper.wrapperEl.classList = "swiper-wrapper")}
        spaceBetween={16}
        slidesPerGroup={2}
        wrapperClass="gap-4"
      >
        <SliderButton
          className="absolute bg-white left-[-1px] top-0 z-10"
          slideType="prev"
          asChild
        >
          <Button variant="tertiary" size="iconSmall">
            <ArrowRightIcon className="rotate-180" />
          </Button>
        </SliderButton>
        {categories.map((item) => (
          <SwiperSlide key={item.text} className="pb-1">
            <Button
              className="py-2 px-4 hover:shadow-elevation-1"
              variant="secondary"
              size="small"
              asChild
            >
              <Link href={item.href}>{item.text}</Link>
            </Button>
          </SwiperSlide>
        ))}
        <SliderButton
          className="absolute bg-white top-0 right-[-1px] z-10"
          slideType="next"
          asChild
        >
          <Button variant="tertiary" size="iconSmall">
            <ArrowRightIcon />
          </Button>
        </SliderButton>
      </Swiper>
    </div>
  );
};
